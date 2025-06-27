<?php

namespace App\Controller;

use App\Entity\Masque;
use App\Entity\Commentaire;
use App\Entity\Notation;
use App\Form\CommentaireTypeForm;
use App\Form\NotationTypeForm;
use App\Repository\NotationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

// ...
class DetailMasqueController extends AbstractController
{
    #[Route('/masque/{id}', name: 'masque_detail')]
    public function detail(
        Masque $masque,
        Request $request,
        EntityManagerInterface $em,
        NotationRepository $notationRepository
    ): Response {
        $commentaireFormView = null;
        $notationFormView = null;
        $userHasRated = false;

        if ($this->getUser()) {
            // --- Commentaire ---
            $commentaire = new Commentaire();
            $form = $this->createForm(CommentaireTypeForm::class, $commentaire);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $commentaire->setMasque($masque);
                $commentaire->setUser($this->getUser());
                if (empty($commentaire->getAuteur())) {
                    $commentaire->setAuteur($this->getUser()->getUserIdentifier());
                }
                $em->persist($commentaire);
                $em->flush();

                $this->addFlash('success', 'Commentaire ajouté !');
                return $this->redirectToRoute('masque_detail', ['id' => $masque->getId()]);
            }

            $commentaireFormView = $form->createView();

            // --- Notation ---
            $notation = new Notation();
            $notation->setMasque($masque);
            $notation->setUser($this->getUser());

            // Vérifie s’il a déjà noté
            $existing = $notationRepository->findOneBy([
                'user' => $this->getUser(),
                'masque' => $masque
            ]);
            $userHasRated = $existing !== null;

            $formNote = $this->createForm(NotationTypeForm::class, $notation);
            $formNote->handleRequest($request);

            if ($formNote->isSubmitted() && $formNote->isValid()) {
                if ($existing) {
                    $existing->setNote($notation->getNote());
                    $em->flush();
                    $this->addFlash('success', 'Votre note a été mise à jour.');
                } else {
                    $em->persist($notation);
                    $em->flush();
                    $this->addFlash('success', 'Merci pour votre note !');
                }

                return $this->redirectToRoute('masque_detail', ['id' => $masque->getId()]);
            }

            $notationFormView = $formNote->createView();

            return $this->render('masque/detail.html.twig', [
                'masque' => $masque,
                'form' => $commentaireFormView,
                'formNote' => $notationFormView,
                'userHasRated' => $userHasRated,
            ]);
        }

        $this->addFlash('warning', 'Vous devez être connecté pour voir les détails du masque.');
        return $this->redirectToRoute('app_login');
    }
}

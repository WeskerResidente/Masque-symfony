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

        // --- Si l'utilisateur est connecté ---
        if ($this->getUser()) {
            // --- Gestion des commentaires ---
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

            // --- Gestion des notations ---
            $notation = new Notation();
            $notation->setMasque($masque);
            $notation->setUser($this->getUser());

            $formNote = $this->createForm(NotationTypeForm::class, $notation);
            $formNote->handleRequest($request);

            if ($formNote->isSubmitted() && $formNote->isValid()) {
                $existing = $notationRepository->findOneBy([
                    'user' => $this->getUser(),
                    'masque' => $masque
                ]);

                if ($existing) {
                    $this->addFlash('error', 'Vous avez déjà noté ce masque.');
                } else {
                    $em->persist($notation);
                    $em->flush();
                    $this->addFlash('success', 'Merci pour votre note !');
                    return $this->redirectToRoute('masque_detail', ['id' => $masque->getId()]);
                }
            }

            $notationFormView = $formNote->createView();

            // --- Affichage avec les deux formulaires ---
            return $this->render('masque/detail.html.twig', [
                'masque' => $masque,
                'form' => $commentaireFormView,
                'formNote' => $notationFormView
            ]);
        }

        // --- Si l'utilisateur n'est pas connecté : redirection login ou autre traitement ---
        $this->addFlash('warning', 'Vous devez être connecté pour voir les détails du masque.');
        return $this->redirectToRoute('app_login');
    }
}

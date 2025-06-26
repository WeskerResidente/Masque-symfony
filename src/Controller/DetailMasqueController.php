<?php

namespace App\Controller;

use App\Entity\Masque;
use App\Entity\Commentaire;
use App\Form\CommentaireTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DetailMasqueController extends AbstractController
{
    #[Route('/masque/{id}', name: 'masque_detail')]
public function detail(Masque $masque, Request $request, EntityManagerInterface $em): Response
{
    $commentaireFormView = null;

    if ($this->getUser()) {
        $commentaire = new Commentaire();
        $form = $this->createForm(CommentaireTypeForm::class, $commentaire);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $commentaire->setMasque($masque);
            $commentaire->setUser($this->getUser());

            // Ajouter nom automatique si vide
            if (empty($commentaire->getAuteur()) && $this->getUser()) {
                $commentaire->setAuteur($this->getUser()->getUserIdentifier());
            }

            $em->persist($commentaire);
            $em->flush();

            $this->addFlash('success', 'Commentaire ajouté !');
            return $this->redirectToRoute('masque_detail', ['id' => $masque->getId()]);
        }

        $commentaireFormView = $form->createView();
    }

    return $this->render('masque/detail.html.twig', [
        'masque' => $masque,
        'form' => $commentaireFormView,
    ]);
}

}

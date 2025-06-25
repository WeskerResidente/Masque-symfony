<?php

namespace App\Controller;

use App\Entity\Masque;
use App\Form\MasqueTypeForm;
use App\Form\AjoutMasqueTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class UpdateController extends AbstractController
{
    #[Route('/modifier/masque/{id}', name: 'app_modifier_masque')]
    public function modifier_masque(Masque $masque, Request $request, EntityManagerInterface $entityManager): Response
    {
        // Pas besoin de new Masque ici, on modifie l'existant
        $form = $this->createForm(MasqueTypeForm::class, $masque);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager->flush();

            $this->addFlash('success', 'Le masque a bien été modifié !');

            return $this->redirectToRoute('app_add_masque_controlleur');
        }

        return $this->render('update/update.html.twig', [
            'form' => $form->createView(),
            'masque' => $masque
        ]);
    }
}

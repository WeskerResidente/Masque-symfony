<?php

namespace App\Controller;

use App\Entity\Masque;
use App\Form\MasqueTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AddMasqueControlleurController extends AbstractController
{
    #[Route('/add/masque/controlleur', name: 'app_add_masque_controlleur')]
    public function index(Request $request, EntityManagerInterface $entityManager): Response
    {
        $masque = new Masque();
        $form = $this->createForm(MasqueTypeForm::class, $masque);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($masque);
            $entityManager->flush();

            $this->addFlash('success', 'Masque ajouté avec succès !');

            return $this->redirectToRoute('app_home'); // redirige vers l'accueil ou une autre page
        }

        return $this->render('add_masque_controlleur/add_masque_controlleur.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

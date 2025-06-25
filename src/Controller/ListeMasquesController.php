<?php

namespace App\Controller;

use App\Repository\MasqueRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ListeMasquesController extends AbstractController
{
    #[Route('/listes/masque', name: 'app_liste_masques')]
    public function index(MasqueRepository $repository): Response
    {
        $masques = $repository->findAll();

        return $this->render('liste_masques/liste_masques.html.twig', [
            'masques' => $masques,
        ]);
    }
}

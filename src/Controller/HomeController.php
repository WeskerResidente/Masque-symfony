<?php

namespace App\Controller;

use App\Repository\MasqueRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(MasqueRepository $masqueRepository): Response
    {
        $derniersMasques = $masqueRepository->findBy([], ['id' => 'DESC'], 4);

        return $this->render('home/home.html.twig', [
            'derniersMasques' => $derniersMasques,
        ]);
    }
}

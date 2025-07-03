<?php

namespace App\Controller;

use App\Repository\MasqueRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class MesMasquesController extends AbstractController
{
    #[Route('/mes/masques', name: 'app_mes_masques')]
    public function mesMasques(MasqueRepository $repository): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        
        $user = $this->getUser();
        $mesMasques = $repository->findBy(['createdBy' => $user], ['createdAt' => 'DESC']);

        return $this->render('mes_masques/mes_masques.html.twig', [
            'masques' => $mesMasques,
        ]);
    }
    
}

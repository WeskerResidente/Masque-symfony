<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Service\MessageGenerator;

final class NotationController extends AbstractController
{
    #[Route('/notation', name: 'app_notation')]
    public function index(MessageGenerator $messageGenerator): Response
    {
        $message = $messageGenerator->getHappyMessage();

        return $this->render('notation/index.html.twig', [
            'controller_name' => 'NotationController',
            'happy_message' => $message, 
        ]);
    }
}

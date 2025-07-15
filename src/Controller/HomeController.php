<?php

namespace App\Controller;

use App\Service\jour;
use App\Service\MessageGenerator;
use App\Repository\MasqueRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(MasqueRepository $masqueRepository, MessageGenerator $messageGenerator,jour $dateMessageGenerator ): Response
    {
        $derniersMasques = $masqueRepository->findBy([], ['id' => 'DESC'], 4);

        // Appel du service pour générer le message
        $happyMessage = $messageGenerator->getHappyMessage();
        
        // Appel du service pour générer le message basé sur la date
        $today = new \DateTime();             // aujourd'hui
        $yesterday = new \DateTime('yesterday'); // hier
        $tomorrow = new \DateTime('tomorrow');   // demain
        $dateMessage = $dateMessageGenerator->getMessage($today);





        return $this->render('home/home.html.twig', [
            'derniersMasques' => $derniersMasques,
            'happyMessage'    => $happyMessage,
            'dateMessage' => $dateMessage,
        ]);
    }
}

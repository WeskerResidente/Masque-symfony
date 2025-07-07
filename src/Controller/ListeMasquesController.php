<?php

namespace App\Controller;

use App\Data\SearchData;
use App\Form\SearchTypeForm;
use App\Repository\MasqueRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ListeMasquesController extends AbstractController
{
        #[Route('/listes/masque', name: 'app_liste_masques')]
        public function index(Request $request, MasqueRepository $repository): Response
        {
            $searchData = new SearchData();
            $form = $this->createForm(SearchTypeForm::class, $searchData);
            $form->handleRequest($request);

            $masques = $repository->findSearch($searchData);

        // Si la requête est AJAX
        if ($request->isXmlHttpRequest()) {
            return $this->render('liste_masques/_masques_list.html.twig', [
                'masques' => $masques,
            ]);
        }

        // Requête normale (page complète)
        return $this->render('liste_masques/liste_masques.html.twig', [
            'masques' => $masques,
            'form' => $form->createView(),
        ]);
        
        }
}

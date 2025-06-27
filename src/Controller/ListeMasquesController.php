<?php

namespace App\Controller;

use App\Data\SearchData;
use App\Form\SearchFormType;
use App\Repository\MasqueRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ListeMasquesController extends AbstractController
{
    #[Route('/listes/masque', name: 'app_liste_masques')]
    public function index(MasqueRepository $repository, Request $request): Response
    {
        $searchData = new SearchData();
        $form = $this->createForm(SearchFormType::class, $searchData);
        $form->handleRequest($request);

        $masques = $repository->findSearch($searchData);

        return $this->render('liste_masques/liste_masques.html.twig', [
            'masques' => $masques,
            'form' => $form->createView(),
        ]);
    }
}

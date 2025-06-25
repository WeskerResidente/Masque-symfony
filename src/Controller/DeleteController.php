<?php

namespace App\Controller;

use App\Entity\Masque;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class DeleteController extends AbstractController
{
    #[Route('/masque/supprimer/{id}', name: 'masque')]
    public function delete(Masque $masque, Request $request, EntityManagerInterface $entityManager): Response
    {

        if ($this->isCsrfTokenValid('SUP' . $masque->getId(), $request->get('_token'))) {

            $entityManager->remove($masque);

            $entityManager->flush();

            $this->addFlash('success', 'Le masque a bien été supprimée.');
        }

        return $this->redirectToRoute('app_liste_masques');
    }
}

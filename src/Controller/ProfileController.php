<?php

namespace App\Controller;

use App\Form\ProfileTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
class ProfileController extends AbstractController
{
    #[Route('/profile', name: 'app_profile')]
    public function edit(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(ProfileTypeForm::class, $user, [
            'method' => 'POST',
            'attr' => ['enctype' => 'multipart/form-data'], // ✅ Important !
        ]);

        $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {
                $avatarFile = $form->get('avatar')->getData();

                if ($avatarFile) {
                    $newFilename = uniqid().'.'.$avatarFile->guessExtension();

                    // Déplace le fichier dans ton dossier public/uploads/avatars
                    $avatarFile->move(
                        $this->getParameter('avatars_directory'),
                        $newFilename
                    );

                    $user->setAvatar($newFilename);
                }

                $entityManager->flush();

                $this->addFlash('success', 'Profil mis à jour !');
                return $this->redirectToRoute('app_profile');
            }
        return $this->render('profile/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/profile/delete', name: 'app_profile_delete', methods: ['POST'])]
    public function delete(Request $request, EntityManagerInterface $entityManager): Response
    {
        $user = $this->getUser();

        if ($this->isCsrfTokenValid('delete-user', $request->request->get('_token'))) {
            $entityManager->remove($user);
            $entityManager->flush();

            // Déconnecter l'utilisateur et invalider la session
            $this->container->get('security.token_storage')->setToken(null);
            $request->getSession()->invalidate();

            $this->addFlash('success', 'Compte supprimé avec succès.');
            return $this->redirectToRoute('app_home');
        }

        return $this->redirectToRoute('app_profile');
    }
}

<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $email = (new Email())
                ->from('expediteur@gmail.com')
                ->to('destinataire@live.fr')
                ->subject('Nouveau message de contact')
                ->text(
                    "Nom: {$data['name']}\n" .
                    "Email: {$data['email']}\n\n" .
                    "Message:\n{$data['message']}"
                );

            $mailer->send($email);

            $this->addFlash('success', 'Votre message a bien été envoyé.');
            
            // Optionnel : redirect pour éviter le double envoi
            return $this->redirectToRoute('app_contact');
        }

        // 💡 Ici on retourne bien la vue avec le formulaire !
        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}

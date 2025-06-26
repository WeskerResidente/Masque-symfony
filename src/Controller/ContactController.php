<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Form\ContactTypeForm;
use Symfony\Component\Mime\Email;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

final class ContactController extends AbstractController
{
        #[Route('/contact', name: 'app_contact')]
        public function contact(Request $request, MailerInterface $mailer): Response
        {
            $contact = new Contact();
            $form = $this->createForm(ContactTypeForm::class, $contact);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                // Pas besoin de getData() ici, on a déjà l'objet $contact
                $email = (new Email())
                    ->from($contact->getMail())
                    ->to('destinataire@example.com')
                    ->subject($contact->getSujet())
                    ->text(
                        "Nom : " . ($contact->getNom() ?? 'Non renseigné') . "\n" .
                        "Email : {$contact->getMail()}\n\n" .
                        "Message :\n{$contact->getMessage()}"
                    );;

                $mailer->send($email);
                $this->addFlash('success', 'Votre message a bien été envoyé !');

                return $this->redirectToRoute('app_contact');
            }

            return $this->render('contact/index.html.twig', [
                'form' => $form->createView(),
            ]);
        }

}

<?php

namespace App\Service;

class MessageGenerator
{
    public function getHappyMessage(): string
    {
        $messages = [
            'Mystère et élégance en un seul geste.',
            'Crée. Inspire. Masque-toi',
            'Un masque, mille émotions.',
            'Fais sensation, choisis ton masque. ',
            'Un masque, mille émotions.',
            ' Révélez-vous autrement. ',
            ' Derrière chaque masque se cache une histoire unique à révéler.  ',
            ' Porte un masque, révèle un monde. ',
            ' Crée ton masque, et laisse ton imagination prendre vie. ',
            ' Chaque masque est une œuvre d’art qui attend d’être admirée. ',
            ' Aujourd’hui, choisis d’être qui tu veux grâce à ton masque.  ',
            ' Ose l’inconnu, ose le masque. ',
            ' L’art du masque, une tradition qui transcende le temps. ',
        ];

        $index = array_rand($messages);

        return $messages[$index];
    }
}

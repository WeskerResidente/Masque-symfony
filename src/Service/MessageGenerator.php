<?php

namespace App\Service;

class MessageGenerator
{
    public function getHappyMessage(): string
    {
        $messages = [
            'Mystère et élégance en un seul geste. ╰(*°▽°*)╯',
            'Crée. Inspire. Masque-toi ᓚᘏᗢ' ,
            'Un masque, mille émotions. (￣y▽￣)╭ Ohohoho.....',
            'Fais sensation, choisis ton masque. ○( ＾皿＾)っ Hehehe…',
            'Un masque, mille émotions. （づ￣3￣）づ╭❤️～',
            ' Révélez-vous autrement. ┻━┻ ︵ ＼( °□° )／ ︵ ┻━┻',
            ' Derrière chaque masque se cache une histoire unique à révéler. ┬┴┬┴┤(･_├┬┴┬┴ ',
            ' Porte un masque, révèle un monde. (((φ(◎ロ◎;)φ)))',
            ' Crée ton masque, et laisse ton imagination prendre vie. (＠_＠;) ',
            ' Chaque masque est une œuvre d’art qui attend d’être admirée. щ(ʘ╻ʘ)щ ',
            ' Aujourd’hui, choisis d’être qui tu veux grâce à ton masque. ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°) ',
            ' Ose l’inconnu, ose le masque. ＼（〇_ｏ）／',
            ' L’art du masque, une tradition qui transcende le temps. ε=ε=ε=(~￣▽￣)~ ',

        ];

        $index = array_rand($messages);

        return $messages[$index];
    }
}

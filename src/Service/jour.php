<?php

namespace App\Service;

class jour
{
    public function getMessage(\DateTime $date): string
    {
        $today = new \DateTime();
        $today->setTime(0, 0, 0);

        $givenDate = clone $date;
        $givenDate->setTime(0, 0, 0);

        $interval = $today->diff($givenDate);
        $daysDiff = (int) $interval->format('%R%a');

        if ($daysDiff === 0) {
            return "C'est aujourd'hui ! Profite du moment présent 🟢";
        } elseif ($daysDiff === -1) {
            return "C'était hier. Un masque de plus dans l'histoire ! 🕰️";
        } elseif ($daysDiff === 1) {
            return "Ce sera demain. Prépare ton plus beau masque ! 🔮";
        } else {
            return "Date choisie : " . $givenDate->format('d/m/Y');
        }
    }
}

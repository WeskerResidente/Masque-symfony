import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';


console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');


import Swiper from 'swiper';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, EffectCoverflow, Autoplay],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
document.addEventListener('DOMContentLoaded', () => {
  const flashes = document.querySelectorAll('.global-flash');
  flashes.forEach(flash => {
    setTimeout(() => {
      flash.classList.add('fade-out');
      setTimeout(() => flash.remove(), 500); // retire le flash après l'animation
    }, 4000); // après 4 secondes
  });
});

// JS pour la recherche avancée
function toggleAdvanced() {
    const section = document.getElementById('advancedSearch');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}
window.toggleAdvanced = toggleAdvanced;

// au lieu de : import './stars.js';

console.log('🎯 Début du stars.js');

document.addEventListener('DOMContentLoaded', function () {
    console.log('✨ stars.js DOM loaded');

    const stars = document.querySelectorAll('#star-widget .star');
    const input = document.getElementById('notation_note_hidden');

    if (!input) {
        console.warn('⛔ Le champ #notation_note_hidden est introuvable.');
        return;
    }

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            input.value = index + 1;
            highlightStars(index);
        });

        star.addEventListener('mouseover', () => {
            highlightStars(index);
        });

        star.addEventListener('mouseout', () => {
            highlightStars(parseInt(input.value) - 1);
        });
    });

    function highlightStars(index) {
        stars.forEach((star, i) => {
            star.style.color = i <= index ? 'gold' : '#888';
        });
    }

    if (input.value) {
        highlightStars(parseInt(input.value) - 1);
    }
});

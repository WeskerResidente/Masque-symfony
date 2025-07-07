console.log('🎯 Début du stars.js');

document.addEventListener('DOMContentLoaded', function () {
    console.log('✨ stars.js DOM loaded');

    // ✅ Ces deux lignes doivent être avant les conditions :
    const stars = document.querySelectorAll('#star-widget .star');
    const input = document.getElementById('notation_note_hidden');
    const form = input?.form;

    // 🔍 Récupère l'info : a-t-il déjà noté ?
    const alreadyRated = document.querySelector('#star-widget').dataset.alreadyRated === "1";

    if (!input || !form || stars.length === 0) {
        console.warn('⛔ Le champ ou le formulaire est manquant.');
        return;
    }

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const newValue = index + 1;

            if (alreadyRated) {
                const confirmed = confirm('Vous avez déjà noté ce masque. Voulez-vous modifier votre note ?');
                if (!confirmed) return; // annule le clic
            }

            input.value = newValue;
            highlightStars(index);
            form.submit(); // ✅ envoie le formulaire manuellement
        });

        star.addEventListener('mouseover', () => highlightStars(index));
        star.addEventListener('mouseout', () => highlightStars(parseInt(input.value) - 1));
    });

        function highlightStars(index) {
            if (index > 3) index = 3; // car index = valeur - 1
            stars.forEach((star, i) => {
                star.style.color = i <= index ? 'gold' : '#888';
            });
        }


    if (input.value) {
        if (input.value > 4) {
            input.value = 4;
        }
        highlightStars(parseInt(input.value) - 1);
    }

});

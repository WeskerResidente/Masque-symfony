
    document.addEventListener('DOMContentLoaded', function () {
        const stars = document.querySelectorAll('#star-widget .star');
        const input = document.getElementById('notation_note_hidden');

        if (!input) return; // sécurité

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
    console.log("stars.js chargé !");
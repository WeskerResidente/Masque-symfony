document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-button');
    const resultsContainer = document.getElementById('results');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');

            fetch(`/filter-page?filterGetValue=${encodeURIComponent(filterValue)}`, {
                method: 'GET',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                resultsContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Erreur lors du filtrage :', error);
            });
        });
    });
});

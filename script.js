document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.chess.com/pub/player/jarry90/stats';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rapidRating = data.chess_rapid.last.rating;
            document.getElementById('rating').innerText = rapidRating;
        })
        .catch(error => {
            console.error('Error fetching the data:', error);
            document.getElementById('rating').innerText = 'Error fetching the rating';
        });
});
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

// Replace with your own client ID and secret
const clientId = '0d380e191bc54ee5a60fae57c561aaee';
const clientSecret = '0bfcb8b39c1d41c7b6a2d1134df819eb';
const redirectUri = 'jarry.dev';

document.addEventListener('DOMContentLoaded', async function() {
    // Function to get the access token
    async function getAccessToken() {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
        });
        
        const data = await response.json();
        return data.access_token;
    }

    // Function to get the top artist
    async function getTopArtist(accessToken) {
        const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=1', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        });
        
        const data = await response.json();
        return data.items[0].name;
    }

    try {
        const token = await getAccessToken();
        const topArtist = await getTopArtist(token);
        document.getElementById('artist').innerText = topArtist;
    } catch (error) {
        console.error('Error fetching the data:', error);
        document.getElementById('artist').innerText = 'Error fetching the artist';
    }
});
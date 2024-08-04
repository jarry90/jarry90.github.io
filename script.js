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
const redirectUri = 'http://jarry.dev';

// Step 1: Redirect to Spotify authorization
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.search.includes('code')) {
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=user-top-read`;
        window.location.href = authUrl;
    } else {
        const code = new URLSearchParams(window.location.search).get('code');
        getAccessToken(code);
    }
});

// Step 2: Get access token using the authorization code
async function getAccessToken(code) {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params
    });

    const data = await response.json();
    const accessToken = data.access_token;
    getTopArtist(accessToken);
}

// Step 3: Fetch top artist
async function getTopArtist(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=1', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    });

    const data = await response.json();
    document.getElementById('artist').innerText = data.items[0].name;
}
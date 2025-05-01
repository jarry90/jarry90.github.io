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

document.addEventListener('DOMContentLoaded', function () {
    fetch('img/me/me.json')
        .then(res => res.json())
        .then(files => {
            const imgEl = document.querySelector('.image img');
            const randomFile = files[Math.floor(Math.random() * files.length)];
            imgEl.src = `img/me/${randomFile}`;

            // Setup gallery click
            imgEl.addEventListener('click', () => {
                const galleryHtml = files.map(file => `
                    <img src="img/me/${file}" style="max-width: 90%; margin: 10px; border-radius: 8px;" />
                `).join('');
                const overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100vw';
                overlay.style.height = '100vh';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                overlay.style.display = 'flex';
                overlay.style.flexWrap = 'wrap';
                overlay.style.justifyContent = 'center';
                overlay.style.alignItems = 'center';
                overlay.style.overflowY = 'auto';
                overlay.style.zIndex = '9999';
                overlay.innerHTML = galleryHtml;
                overlay.addEventListener('click', () => document.body.removeChild(overlay));
                document.body.appendChild(overlay);
            });
        })
        .catch(err => console.error('Failed to load image list:', err));
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('img/me/me.json')
        .then(res => res.json())
        .then(files => {
            const randomFile = files[Math.floor(Math.random() * files.length)];
            const imagePath = `img/me/${randomFile}`;

            const img = new Image();
            img.src = imagePath;
            img.alt = 'Profile';

            img.onload = () => {
                document.getElementById('profile-image').appendChild(img);

                // Gallery click
                img.addEventListener('click', () => {
                    const galleryHtml = files.map(file => `
                        <img src="img/me/${file}" style="max-width: 90%; margin: 10px; border-radius: 8px;" />
                    `).join('');
                    const overlay = document.createElement('div');
                    overlay.style = `
                        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                        background: rgba(0,0,0,0.9); display: flex; flex-wrap: wrap;
                        justify-content: center; align-items: center; overflow-y: auto; z-index: 9999;
                    `;
                    overlay.innerHTML = galleryHtml;
                    overlay.addEventListener('click', () => overlay.remove());
                    document.body.appendChild(overlay);
                });
            };
        });
});





// // Pre-generated authorization token
// const token = 'BQAXp33kHIulAoZrvjgGU2THyTAKRQFO3iRDdCc80ToCojzs7qOBxB8PIv735NBX7PXWm7r3wftHf5tsFzRrkCwdLE_Es39zdW5AUErkvnqirZhtKdyb4Qlo-mK1Lg0ArYZxIgwO8P6B0hIFrRsdMcd7wvLhFLQlcRQbNApTJks_pFzSZjoRUE6CXylQhzZKGnRXfHyTLFL3p24Z8SCofdiJjM4dOEqc_DPX_l-vNFK-HCc7CKr4KDxbvAca0ghvJPFTDnDFEAI';

// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopTracks() {
//   return (await fetchWebApi(
//     'v1/me/top/tracks?time_range=short_term&limit=5', 'GET'
//   )).items;
// }

// document.addEventListener('DOMContentLoaded', async function() {
//   try {
//     const topTracks = await getTopTracks();
//     const topTrackInfo = topTracks?.map(
//       ({ name, artists }) =>
//         `${name} by ${artists.map(artist => artist.name).join(', ')}`
//     ).join(', ');

//     document.getElementById('artist').innerText = topTrackInfo || 'No top tracks found';
//   } catch (error) {
//     console.error('Error fetching the artist:', error);
//     document.getElementById('artist').innerText = 'Error fetching the artist';
//   }
// });

// // Pre-generated authorization token
// const token = 'BQAXp33kHIulAoZrvjgGU2THyTAKRQFO3iRDdCc80ToCojzs7qOBxB8PIv735NBX7PXWm7r3wftHf5tsFzRrkCwdLE_Es39zdW5AUErkvnqirZhtKdyb4Qlo-mK1Lg0ArYZxIgwO8P6B0hIFrRsdMcd7wvLhFLQlcRQbNApTJks_pFzSZjoRUE6CXylQhzZKGnRXfHyTLFL3p24Z8SCofdiJjM4dOEqc_DPX_l-vNFK-HCc7CKr4KDxbvAca0ghvJPFTDnDFEAI'

// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body)
//   });
//   return await res.json();
// }

// async function getTopArtists() {
//   return (await fetchWebApi(
//     'v1/me/top/artists?time_range=short_term&limit=5', 'GET'
//   )).items;
// }

// document.addEventListener('DOMContentLoaded', async function() {
//   try {
//     const topArtists = await getTopArtists();
//     const topArtistInfo = topArtists?.map(artist => artist.name).join(', ');

//     document.getElementById('artist').innerText = topArtistInfo || 'No top artists found';
//   } catch (error) {
//     console.error('Error fetching the artist:', error);
//     document.getElementById('artist').innerText = 'Error fetching the artist';
//   }
// });

// ############################
// // Load environment variables from .env file
// const clientId ="378133ac8b6245c0b078a86f429fd3de"
// const clientSecret ="e6a35b841b4b4105b9785ce5aff27514"

// // const SPOTIFY_CLIENT_ID = "your_client_id";
// // const SPOTIFY_CLIENT_SECRET = "your_client_secret";
// const redirectUri = 'http://localhost:8080';

// async function getAuthToken(code) {
//   const tokenUrl = 'https://accounts.spotify.com/api/token';
//   const body = new URLSearchParams({
//     grant_type: 'authorization_code',
//     code: code,
//     redirect_uri: redirectUri,
//     client_id: clientId,
//     client_secret: clientSecret,
//   });

//   try {
//     const res = await fetch(tokenUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: body.toString(),
//     });

//     if (!res.ok) {
//       throw new Error(`Failed to fetch token: ${res.status} ${res.statusText}`);
//     }

//     const data = await res.json();
//     localStorage.setItem('spotify_access_token', data.access_token);
//     return data.access_token;
//   } catch (error) {
//     console.error('Error fetching auth token:', error);
//     throw error;
//   }
// }

// async function fetchWebApi(endpoint, method, body) {
//   let token = localStorage.getItem('spotify_access_token');
  
//   if (!token) {
//     const urlParams = new URLSearchParams(window.location.search);
//     const authorizationCode = urlParams.get('code');
    
//     if (authorizationCode) {
//       token = await getAuthToken(authorizationCode);
//     } else {
//       const scopes = 'user-top-read';
//       const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirectUri)}`;
//       window.location.href = authUrl;
//       return;
//     }
//   }

//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: body ? JSON.stringify(body) : null,
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
//   }

//   return await res.json();
// }

// async function getTopTracks() {
//   try {
//     const data = await fetchWebApi('v1/me/top/tracks?time_range=short_term&limit=5', 'GET');
//     const topTrackInfo = data.items.map(
//       ({ name, artists }) =>
//         `${name} by ${artists.map(artist => artist.name).join(', ')}`
//     ).join(', ');

//     document.getElementById('artist').innerText = topTrackInfo || 'No top tracks found';
//   } catch (error) {
//     console.error('Error fetching top tracks:', error);
//     document.getElementById('artist').innerText = 'Error fetching top tracks';
//   }
// }

// document.addEventListener('DOMContentLoaded', async function() {
//   await getTopTracks();
// });
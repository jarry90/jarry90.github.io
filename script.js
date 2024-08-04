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

// Pre-generated authorization token
const token = 'BQAubCMhNIm_O5lgBPBjOY7_fxZxofAYiG6kD3SRJfILbOibm_Baw-VOxNDCWh2UygJydxpCYzlwwsFdv73LLdsFqb250h6Tk3_CaDDInuJd5Od9AWSZ5uX7ZsJ59fyurdsCU4hkc08shPhc4LLrIsbhXSFOtZe4MsoIlfs625WZ2lOhkSMu50BcO8O3UoAHvefkbkU-wmLntESYeVsgIYR6X2a-t4CTmLzmY8ffLmFDjTAXNsR-IfzhygbAGbgrAeYhE_9cj4Y';

async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks() {
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=short_term&limit=1', 'GET'
  )).items;
}

document.addEventListener('DOMContentLoaded', async function() {
  try {
    const topTracks = await getTopTracks();
    const topTrackInfo = topTracks?.map(
      ({ name, artists }) =>
        `${name} by ${artists.map(artist => artist.name).join(', ')}`
    ).join(', ');

    document.getElementById('artist').innerText = topTrackInfo || 'No top tracks found';
  } catch (error) {
    console.error('Error fetching the artist:', error);
    document.getElementById('artist').innerText = 'Error fetching the artist';
  }
});
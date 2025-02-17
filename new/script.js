const clientId = '36e0496a51ab4317aca168a0708aef1a';  // Replace with your actual Client ID
const clientSecret = 'bb4f2a1bca6e4dc084b69790e985375d';

let accessToken = '';

async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    accessToken = data.access_token;
}

async function searchSongs(query) {
    if (!accessToken) await getToken();

    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=5`, {
        headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    const data = await response.json();
    displayResults(data.tracks.items);
}

function displayResults(songs) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    songs.forEach(song => {
        if (!song.preview_url) return;
        const songElement = document.createElement('div');
        songElement.classList.add('song');

        songElement.innerHTML = `
            <img src="${song.album.images[0].url}" alt="Album Art">
            <p>${song.name} - ${song.artists[0].name}</p>
            <button onclick="playPreview('${song.preview_url}')">Play</button>
        `;

        resultsDiv.appendChild(songElement);
    });
}

function playPreview(url) {
    if (!url) {
        alert('Preview not available for this track.');
        return;
    }
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = url;
    audioPlayer.play();
}

document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    if (query) searchSongs(query);
});

getToken();

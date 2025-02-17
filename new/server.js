require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

SPOTIFY_CLIENT_ID='36e0496a51ab4317aca168a0708aef1a';
SPOTIFY_CLIENT_SECRET='bb4f2a1bca6e4dc084b69790e985375d';
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

async function getSpotifyToken() {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
        new URLSearchParams({ 'grant_type': 'client_credentials' }),
        {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );
    return response.data.access_token;
}

app.get('/token', async (req, res) => {
    try {
        const token = await getSpotifyToken();
        res.json({ access_token: token });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch token' });
    }
});

app.listen(PORT, () => console.log(`🎵 Backend running on http://localhost:${PORT}`));

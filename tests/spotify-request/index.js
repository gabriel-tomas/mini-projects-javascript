const dotenv = require("dotenv");
const {resolve} = require("path");
dotenv.config({path: resolve(__dirname, ".env")});

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

async function requestSpotifyToken() {
    const request = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    });
    const response = await request.json();
    return response.access_token;
}

async function requestCategories(getToken) {
    const token = await getToken();
    const request = await fetch("https://api.spotify.com/v1/browse/categories?limit=5",{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const response = await request.json();
    return response;
}

requestCategories(requestSpotifyToken);
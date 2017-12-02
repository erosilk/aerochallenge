const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const fs = require('fs');

const server = express();

const utils = require("./utils");
const cdapi = require("./utils/cdapi.js");

const constantes = require('./constants');

const spotifyApi = new SpotifyWebApi({
    clientId: '2eff46cc8eee489d94216d28fff76986',
    clientSecret: '2997d687eea4491fb9d19e08cd4bd1cc',
});


server.get("/", (req, res) => {
    cdapi.getAuthUrl(req, res, "/svredirect")
        .then((auth) => auth.res.redirect(auth.authUrl));
});

server.get("/svredirect", async (req, res) => {
        spotifyApi.authorizationCodeGrant(req.query.code).then(
            function (data) {
                spotifyApi.setAccessToken(data.body["access_token"]);
                spotifyApi.setRefreshToken(data.body["refresh_token"]);

                utils.updatePlaylists(spotifyApi, constantes.APP_CONFIG.playlists)
                    .then(playlists => {
                        fs.writeFileSync('./tmp/playlists.json', JSON.stringify(playlists));
                    })
                    .catch(err => console.log(err))
            },
            function (err) {
                console.log(err);
            }
        );
});

server.listen(3000, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000`);
});

require('dotenv').config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require('request');
var fs = require('fs');
var client new twitter(keys.twitter);

// Spotify
function spotifyThisSong(trackName) {
    var trackName = process.argv[3];
    if (!trackName) {
        trackName = "The Sign";
    };
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest
    },
        function (err, data) {
            if (!err) {
                var trackInfo = data.tracks.items;
                for (var i = 0; i < 5; i++) {
                    if (trackInfo[i] != undefined) {
                        var spotifyResults =
                            "Artist: " + trackInfo[i].artists[0].name + "\n" +
                            "Song: " + trackInfo[i].name + "\n" +
                            "Preview URL: " + trackInfo[i].preview_url + "\n" +
                            "Album: " + trackInfo[i].album.name + "\n"

                        console.log(spotifyResults);
                        console.log(' ');
                    };
                };
            } else {
                console.log("error: " + err);
                return;
            };
        });
};


switch (liriReturn) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;


    // Twitter
    default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
        "my-tweets" + "\n" +
        "spotify-this-song 'any song title' " + "\n" +
        "movie-this 'any movie title' " + "\n" +
        "do-what-it-says " + "\n" +
        "Use quotes for multiword titles!");
};
function myTweets() {
    var params = { screen_name: 'DangerNoodle18' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {

                console.log(tweets[i].text);
            };
        } else {
            console.log("error: " + err);
            return;
        };
    });
};

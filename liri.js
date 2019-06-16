var keys = require("./keys.js");

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var client = new Twitter(keys.twitterKeys);

var input = process.argv;
var optionSwitch = input[2];
var userInput = input[3];

switch (optionSwitch) {
    case "tweets":
        twitter(userInput);
        break;

    case "spotify":
        spotify(userInput);
        break;

    case "movie":
        movie(userInput);
        break;

    case "do-what-it-says":
        doit();
        break;
};


// function twitter update
function twitter(userInput) {
    var params = { screen_name: userInput, count: 20 };

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++) {
                console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
            }
        } else {
            console.log(error);
        }
    });

}

// function spotify 
function spotify(userInput) {

    var spotify = new Spotify(keys.spotifyKeys);
    if (!userInput) {
        userInput = 'The Sign';
    }
    spotify.search({

        type: 'track',
        query: userInput
    },

        function (err, data) {
            if (err) {

                console.log('Error occurred: ' + err);
                return;
            }

            var songs = data.tracks.items;

            console.log("Album: " + songs[0].album.name);

            console.log("Song Name: " + songs[0].name);

            console.log("Preview Link: " + songs[0].preview_url);

            console.log("Artist(s): " + songs[0].artists[0].name);
        });
}

// function spotify 

function movie(userInput) {

    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=40e9cece";

    request(queryUrl, function (error, response, body) {
        if (!userInput) {
            userInput = 'Mr Nobody';
        }
        if (!error && response.statusCode === 200) {

            console.log("Title: " + JSON.parse(body).Title);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("imdbRating: " + JSON.parse(body).imdbRating);
                        
                       
        }
    });
};

function doit() {
    fs.readFile('random.txt', "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        
        var dataArr = data.split(",");

        
        if (dataArr[0] === "spotify-this-song") {
            var songcheck = dataArr[1].slice(1, -1);
            spotify(songcheck);
        } else if (dataArr[0] === "my-tweets") {
            var tweetname = dataArr[1].slice(1, -1);
            twitter(tweetname);
        } else if (dataArr[0] === "movie-this") {
            var movie_name = dataArr[1].slice(1, -1);
            movie(movie_name);
        }

    });

};
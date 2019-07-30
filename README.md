# liri
LIRI-Bot
 LIRI will be a command line node app that takes in parameters and gives you back data.
LIRI uses the following commands:
my-tweets
spotify-this-song
movie-this
do-what-it-says
Technologies used:
•	Node.js
•	Javascript
npm packages:
•	request - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
API Used:
•	twitter - an asynchronous client library for the Twitter REST and Streaming API's.
•	spotify - A simple to use API library for the Spotify REST API.
How to Run LIRI-Bot
•	Step One: node liri my-tweets This will show your last 20 tweets and when they were created at in your terminal/bash window.
•	Step Two: node liri spotify-this-song <song>.
This will show the following information about the song in your terminal/bash window:
o	Artist(s)
o	The song's name
•	Step Three: node liri.js movie-this <movie>.
This will output the following information to your terminal/bash window:
o	Title of the movie.
o	Year the movie came out.
o	IMDB Rating of the movie.

If the user doesn't type a movie in, the program will output data for the movie matrix.
•	Step Four: node liri.js do-what-it-says
command placed in random.txt file


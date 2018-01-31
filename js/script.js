// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title": "bank account",
	"artist": "21 savage",
	"mp3-url": "https://open.spotify.com/search/results/bank%20account",
	"image-url": "https://i.scdn.co/image/c1198389b8aa0fa3ff453e4c7bdc2b1665e70386"
}

$('body').append("<p>mySong: " + mySong.title + "</p>");
$('body').append("<p>mySong: " + mySong.artist + "</p>");
$('body').append("<p>mySong: " + mySong.mp3 - url + "</p>");
$('body').append("<img src=" + mySong.image - url + "<img>");

var myPlayList = [{
		"title": "24K Magic",
		"artist": "Bruno Mars",
		"mp3-url": "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url": "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title": "Sir Duke",
		"artist": "Stevie Wonder",
		"mp3-url": "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title": "Sorry",
		"artist": "Justin Bieber",
		"mp3-url": "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url": "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$(document).ready(function() {




});

function displayList() {



}

function clearList() {



}

function addSong() {



}

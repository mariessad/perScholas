//How to begin:
// Create a new HTML/CSS/JS and complete the following in your .js file
// Make a radio Object.Give it a property called stations and make the value an array of station objects
// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.
// Song object should have two properties: title and artist
// Create a method on your radio object that changes the station randomly.
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

const Radio = {
  stations: [
    (station1 = { name: "rock", songs: "" }),
    (station2 = { name: "jazz", songs: "" }),
  ],
};

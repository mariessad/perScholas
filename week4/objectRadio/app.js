//How to begin:
// Create a new HTML/CSS/JS and complete the following in your .js file

// Make a radio Object.Give it a property called stations and make the value an array of station objects

// Give each station object a property called name and songs. Name should be a string and should be an array of song objects.

// Song object should have two properties: title and artist

// Create a method on your radio object that changes the station randomly.
// When the station is changed, pick a song from that station console.log("Now Playing:" + song,title + "by" + song.artist)

const Radio = {
  stations: [
    (station1 = {
      name: "rock",
      songs: [
        (song1 = { title: "I love music", artist: "fancy lad" }),
        (song2 = { title: "I hate music", artist: "grumpy gal" }),
        (song3 = { title: "music is my everything", artist: "band of songs" }),
        (song4 = { title: "where is my hat", artist: "hatman" }),
      ],
    }),
    (station2 = {
      name: "jazz",
      songs: [
        (song1 = { title: "how long from now", artist: "timer" }),
        (song2 = { title: "ohno", artist: "yes" }),
        (song3 = { title: "maybe don't", artist: "barry white" }),
        (song4 = { title: "I didn't write this", artist: "popstar" }),
      ],
    }),
    (station3 = {
      name: "rap",
      songs: [
        (song1 = { title: "Lets not get anything started", artist: "in here" }),
        (song2 = { title: "babyman", artist: "Adult" }),
        (song3 = { title: "maybe don't", artist: "barry white" }),
        (song4 = { title: "I didn't write this", artist: "popstar" }),
      ],
    }),
  ],

  changeStation: function () {
    length = Radio.stations.length;

    radioStation = Math.floor(Math.random() * length);
    song = Math.floor(Math.random() * 4);
    title = Radio.stations[radioStation].songs[song];

    // console.log(title);
    console.log("Now Playing " + title.title + " by " + title.artist);
  },
};

Radio.changeStation();

// const button = document.querySelector("button");

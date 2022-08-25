let movieDiv = document.querySelector(".movie-one");
let movieDivTwo = document.querySelector(".movie-two");
let movieDivThree = document.querySelector(".movie-three");

let movieTab = document.querySelector(".movie-tab");
let movieTabOne = document.querySelector(".movie-tab-two");
let movieTabTwo = document.querySelector(".movie-tab-three");

let knife = document.querySelector(".knife-icon");
console.log(knife);
let knifeOne = document.querySelector(".knife-icon-two");
let knifeTwo = document.querySelector(".knife-icon-three");
let knifeThree = document.querySelector(".knife-icon-one");

const eventHandler = () => {
  //   alert("clicked!");
  movieDiv.classList.toggle("toggle-hide");
  //   movieTab.classList.toggle("toggle-show");
};
const eventHandler1 = () => {
  //   alert("clicked!");
  movieDivTwo.classList.toggle("toggle-hide");
};
const eventHandler2 = () => {
  //   alert("clicked!");
  movieDivThree.classList.toggle("toggle-hide");
};

const eventSpin = () => {
  knife.classList.toggle("spin");
};
const eventSpin1 = () => {
  knifeOne.classList.toggle("spin");
};
const eventSpin2 = () => {
  knifeTwo.classList.toggle("spin");
};
const eventSpin3 = () => {
  knifeThree.classList.toggle("spin");
};

movieDiv.addEventListener("click", eventHandler);
movieDivTwo.addEventListener("click", eventHandler1);
movieDivThree.addEventListener("click", eventHandler2);

movieTab.addEventListener("click", eventHandler);
movieTabOne.addEventListener("click", eventHandler1);
movieTabTwo.addEventListener("click", eventHandler2);

knife.addEventListener("mouseover", eventSpin);
knifeOne.addEventListener("mouseover", eventSpin1);
knifeTwo.addEventListener("mouseover", eventSpin2);
knifeThree.addEventListener("mouseover", eventSpin3);

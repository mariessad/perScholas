let movieDiv = document.querySelector(".movie-one");
let movieDivTwo = document.querySelector(".movie-two");
let movieDivThree = document.querySelector(".movie-three");

let movieTab = document.querySelector(".movie-tab");
let movieTabOne = document.querySelector(".movie-tab-two");
let movieTabTwo = document.querySelector(".movie-tab-three");
// console.log(movieDiv);

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

movieDiv.addEventListener("click", eventHandler);
movieDivTwo.addEventListener("click", eventHandler1);
movieDivThree.addEventListener("click", eventHandler2);

movieTab.addEventListener("click", eventHandler);
movieTabOne.addEventListener("click", eventHandler1);
movieTabTwo.addEventListener("click", eventHandler2);

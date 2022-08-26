// side scroll game

//on key press event, trigger jump animation class

const bunny = document.getElementById("character");
const food = document.getElementById("health");
const monster = document.getElementById("obstacle");
const score = document.getElementById("score");

const jump = () => {
  bunny.classList.add("jump-animation");
  setTimeout(() => {
    bunny.classList.remove("jump-animation");
  }, 500);
};

document.addEventListener("keypress", () => {
  if (!bunny.classList.contains("jump-animation")) {
    jump();
  }
});

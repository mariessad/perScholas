// side scroll game

//on key press event, trigger jump animation class

const bunny = document.getElementById("character");
// const food = document.getElementById("health");
const monster = document.getElementById("obstacle");
const score = document.getElementById("score");
const button = document.querySelector("button");

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

// start button

button.addEventListener("click", () => {
  monster.style.animation = "monster 1.33s infinite";
  //update state of the game

  setInterval(() => {
    score.innerText++;
    const bunnyTop = parseInt(
      window.getComputedStyle(bunny).getPropertyValue("top")
    );
    const monsterLeft = parseInt(
      window.getComputedStyle(monster).getPropertyValue("left")
    );
    // const foodLeft = parseInt(
    //   window.getComputedStyle(food).getPropertyValue("left")
    // );
    //   console.log(bunnyTop);
    if (monsterLeft <= 20) {
      monster.style.display = "none";
    } else {
      monster.style.display = "";
    }
    // if (foodLeft < 0) {
    //   food.display = "none";
    // } else {
    //   food.style.display = "";
    // }
    console.log(monsterLeft);
    console.log(bunnyTop);

    if (monsterLeft < 30 && monsterLeft > 0 && bunnyTop > 150) {
      alert(`You got a score of ${score.innerText}\n\n Play again?`);
      location.reload();
    }

    //   if ((score.innerText = 0)) {
    //     alert("game over");
    //   }
  }, 50);
});

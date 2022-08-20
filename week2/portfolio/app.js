// document.querySelector("nav").addEventListener("mouseover", colorChange);

// function colorChange() {
//   document.querySelector("nav").innerHTML = "color:red";
// }

//

const HEX_ALPHABET = "0123456789abcdef";
const COLORS_NUM = 2;

function random(arr) {
  return arr[Math.floor(arr.length * Math.random())];
}

function randomHex(len) {
  let str = "";
  while (str.length < len) {
    str = `${str}${
      HEX_ALPHABET[Math.floor(Math.random() * HEX_ALPHABET.length)]
    }`;
  }
  return str;
}

function genColors(string) {
  const colors = [];

  for (let i = 0; i < string.length - 5; i += 1) {
    colors.push(string.slice(i, i + 6));
  }

  return colors;
}

function createGradient(colors) {
  const colorStrings = colors.map((color) => {
    return `#${color}`;
  });
  return ["135deg"].concat(colorStrings).join(", ");
}

function updateElement(elem) {
  const hex = randomHex(COLORS_NUM + 5);
  const colors = genColors(hex);
  elem.style.background = `linear-gradient(${createGradient(colors)})`;
  //   elem.innerText = hex;

  return elem;
}

const elem = document.querySelector(".colors");

updateElement(elem);

elem.addEventListener("mousemove", (e) => updateElement(e.target));

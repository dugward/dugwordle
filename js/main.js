import { dict } from "./dict.js";

var letterList = [
  "e",
  "t",
  "a",
  "o",
  "i",
  "n",
  "s",
  "h",
  "r",
  "d",
  "l",
  "c",
  "u",
  "m",
  "w",
  "f",
  "g",
  "y",
  "p",
  "b",
  "v",
  "k",
  "j",
  "x",
  "q",
  "z",
];

var letter1, letter2, letter3, letter4, letter5, word;

var counter = 10;

const input = document.querySelectorAll("input");

function enterFirstWord() {
  word = input[0].value;
  if (word.length == 5) {
    document.querySelectorAll(".clicksplain")[0].style.display = "block";
    document.querySelectorAll("input")[0].style.display = "none";
    document.querySelectorAll(".checkButtonFirst")[0].style.display = "none";
    document.querySelectorAll(".checkButton")[0].style.display = "block";
    const wordLetters = word.split("");
    document.querySelectorAll(".words")[0].insertAdjacentHTML(
      "afterEnd",
      `
    <div class="word ${counter} ">
  <div class="1 ${counter} letter blank">${wordLetters[0]}</div><div class="2 ${counter} letter blank">${wordLetters[1]}</div><div class="3 ${counter} letter blank">${wordLetters[2]}</div><div class="4 ${counter} letter blank">${wordLetters[3]}</div><div class="5 ${counter} letter blank">${wordLetters[4]}</div>
</div>
`
    );
    const letters = document.getElementsByClassName(`${counter} letter`);
    Array.from(letters).forEach((el) => {
      el.addEventListener("click", () => {
        if (el.classList.contains("blank") == true) {
          el.classList.remove("blank");
          el.classList.add("nix");
          el.style.background = "#787c7e";
        } else if (el.classList.contains("nix") == true) {
          el.classList.remove("nix");
          el.classList.add("yellow");
          el.style.background = "#c9b458";
        } else if (el.classList.contains("yellow") == true) {
          el.classList.remove("yellow");
          el.classList.add("green");
          el.style.background = "#6aaa64";
        } else if (el.classList.contains("green") == true) {
          el.classList.remove("green");
          el.classList.add("blank");
          el.style.background = "white";
        }
      });
    });
  }
}

var anagrams = [];

document
  .querySelectorAll(".checkButtonFirst")[0]
  .addEventListener("click", enterFirstWord);

document
  .querySelectorAll(".checkButton")[0]
  .addEventListener("click", enterWord);

function enterWord() {
  var endLetter = 5;
  var topLetters = letterList.slice(0, endLetter);
  var testWord = topLetters.join("");
  console.log(testWord);
  const fetchPromise = fetch(`http://www.anagramica.com/all/:${testWord}`);
  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((x) => {
      anagrams = x.all;
      console.log(anagrams);
    });
}

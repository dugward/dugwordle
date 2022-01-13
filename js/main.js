import { dict } from "./dict.js";

var letterList = [
  "s",
  "e",
  "a",
  "o",
  "r",
  "i",
  "l",
  "t",
  "n",
  "u",
  "d",
  "y",
  "c",
  "p",
  "m",
  "h",
  "g",
  "b",
  "k",
  "f",
  "w",
  "v",
  "z",
  "j",
  "x",
  "q",
];

var knownLetters = [];

var letter1, letter2, letter3, letter4, letter5, word;
var letter1not = [];
var letter2not = [];
var letter3not = [];
var letter4not = [];
var letter5not = [];

var counter = 10;

const input = document.querySelectorAll("input")[0];

function enterFirstWord() {
  const input = document.querySelectorAll("input")[0];
  word = input.value;
  if (word.length == 5) {
    document.querySelectorAll(".clicksplain")[0].style.display = "block";
    input.style.display = "none";
    document.querySelectorAll(".checkButtonFirst")[0].style.display = "none";
    document.querySelectorAll(".checkButton")[0].style.display = "block";
    const wordLetters = word.split("");
    document.querySelectorAll(".words")[0].insertAdjacentHTML(
      "beforeEnd",
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

function enterNextWord() {
  if (unigrams.length > 0) {
    word = unigrams[0];
  } else if (unigrams.length > 0) {
    word = copygrams[0];
  } else {
    document.querySelectorAll(".clicksplain")[0].innerHTML = "I can't help!";
  }

  const wordLetters = word.split("");
  document.querySelectorAll(".words")[0].insertAdjacentHTML(
    "beforeEnd",
    `
    <div class="word ${counter} ">
  <div class="1 ${counter} letter blank unselectable">${wordLetters[0]}</div><div class="2 ${counter} letter blank unselectable">${wordLetters[1]}</div><div class="3 ${counter} letter blank unselectable">${wordLetters[2]}</div><div class="4 ${counter} letter blank unselectable">${wordLetters[3]}</div><div class="5 ${counter} letter blank unselectable">${wordLetters[4]}</div>
</div>
`
  );
  const letters = document.getElementsByClassName(`${counter} letter`);
  const lettersarr = Array.from(letters);
  lettersarr.forEach((el) => {
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
  if (letter1 != undefined) {
    lettersarr[0].classList.remove("blank");
    lettersarr[0].classList.add("green");
    lettersarr[0].style.background = "#6aaa64";
  }
  if (letter2 != undefined) {
    lettersarr[1].classList.remove("blank");
    lettersarr[1].classList.add("green");
    lettersarr[1].style.background = "#6aaa64";
  }
  if (letter3 != undefined) {
    lettersarr[2].classList.remove("blank");
    lettersarr[2].classList.add("green");
    lettersarr[2].style.background = "#6aaa64";
  }
  if (letter4 != undefined) {
    lettersarr[3].classList.remove("blank");
    lettersarr[3].classList.add("green");
    lettersarr[3].style.background = "#6aaa64";
  }
  if (letter5 != undefined) {
    lettersarr[4].classList.remove("blank");
    lettersarr[4].classList.add("green");
    lettersarr[4].style.background = "#6aaa64";
  }
}

var anagrams = [];
var unigrams = [];
var copygrams = [];

document
  .querySelectorAll(".checkButtonFirst")[0]
  .addEventListener("click", enterFirstWord);

input.addEventListener("keypress", () => {
  if (event.keyCode == 13 && input.style.display != "none") {
    enterFirstWord();
  } else {
    return false;
  }
});

document
  .querySelectorAll(".checkButton")[0]
  .addEventListener("click", enterWord);

function enterWord() {
  if (counter < 15) {
    anagrams = [];
    unigrams = [];
    copygrams = [];

    const letters = document.getElementsByClassName(`${counter} letter`);

    Array.from(letters).forEach((letter) => {
      if (letter.classList.contains("nix") == true) {
        letterList = letterList.filter((item) => item !== letter.textContent);
      }
      if (letter.classList.contains("yellow") == true) {
        if (letter.classList[0] == 1) {
          letter1not.push(letter.textContent);
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 2) {
          letter2not.push(letter.textContent);
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 3) {
          letter3not.push(letter.textContent);
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 4) {
          letter4not.push(letter.textContent);
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 5) {
          letter5not.push(letter.textContent);
          knownLetters.push(letter.textContent);
        }
      }

      if (letter.classList.contains("green") == true) {
        if (letter.classList[0] == 1) {
          letter1 = letter.textContent;
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 2) {
          letter2 = letter.textContent;
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 3) {
          letter3 = letter.textContent;
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 4) {
          letter4 = letter.textContent;
          knownLetters.push(letter.textContent);
        }
        if (letter.classList[0] == 5) {
          letter5 = letter.textContent;
          knownLetters.push(letter.textContent);
        }
      }
    });
    knownLetters = [...new Set(knownLetters)];
    console.log(`letterList length = ${letterList.length}`);
    console.log(`known letters = ${knownLetters}`);
    console.log(
      `${letter1} / ${letter2} / ${letter3} / ${letter4} / ${letter5}`
    );
    anaSearch();
    counter++;
    enterNextWord();
  }
}

function anaSearch() {
  var endLetter = 4;
  while (unigrams.length == 0 && endLetter < 26) {
    console.log("adding a letter");
    endLetter++;
    var topLetters = letterList.slice(0, endLetter);
    console.log(`top letters = ${topLetters}`);
    dict.forEach((word) => {
      const wordLettersAll = Array.from(word);
      const wordLetters = [...new Set(wordLettersAll)];
      if (wordLetters.every((val) => topLetters.includes(val)) == true) {
        if (knownLetters.every((val) => wordLetters.includes(val)) == true) {
          if (wordLetters.length < wordLettersAll.length) {
            copygrams.push(word);
          }
          if (wordLetters.length == wordLettersAll.length) {
            unigrams.unshift(word);
          }
        }
      } else {
        return false;
      }
    });

    //

    unigrams.forEach((word) => {
      const wordLettersAll = Array.from(word);
      const wordLetters = [...new Set(wordLettersAll)];
      if (letter1not.length > 0) {
        if (letter1not.includes(wordLettersAll[0])) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter2not.length > 0) {
        if (letter2not.includes(wordLettersAll[1])) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter3not.length > 0) {
        if (letter3not.includes(wordLettersAll[2])) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter4not.length > 0) {
        if (letter4not.includes(wordLettersAll[3])) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter5not.length > 0) {
        if (letter5not.includes(wordLettersAll[4])) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
    });

    //
    unigrams.forEach((word) => {
      const wordLettersAll = Array.from(word);
      if (letter1 != undefined) {
        if (wordLettersAll[0] != letter1) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter2 != undefined) {
        if (wordLettersAll[1] != letter2) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter3 != undefined) {
        if (wordLettersAll[2] != letter3) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter4 != undefined) {
        if (wordLettersAll[3] != letter4) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
      if (letter5 != undefined) {
        if (wordLettersAll[4] != letter5) {
          unigrams = unigrams.filter((item) => item !== word);
        }
      }
    });

    copygrams.forEach((word) => {
      const wordLettersAll = Array.from(word);
      const wordLetters = [...new Set(wordLettersAll)];
      if (letter1not.length > 0) {
        if (letter1not.includes(wordLettersAll[0])) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter2not.length > 0) {
        if (letter2not.includes(wordLettersAll[1])) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter3not.length > 0) {
        if (letter3not.includes(wordLettersAll[2])) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter4not.length > 0) {
        if (letter4not.includes(wordLettersAll[3])) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter5not.length > 0) {
        if (letter5not.includes(wordLettersAll[4])) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
    });

    //
    copygrams.forEach((word) => {
      const wordLettersAll = Array.from(word);
      if (letter1 != undefined) {
        if (wordLettersAll[0] != letter1) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter2 != undefined) {
        if (wordLettersAll[1] != letter2) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter3 != undefined) {
        if (wordLettersAll[2] != letter3) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter4 != undefined) {
        if (wordLettersAll[3] != letter4) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
      if (letter5 != undefined) {
        if (wordLettersAll[4] != letter5) {
          copygrams = copygrams.filter((item) => item !== word);
        }
      }
    });

    console.log(unigrams);
    console.log(copygrams);
  }
}

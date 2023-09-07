let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose");

const mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let playAgain = document.querySelector("#playAgain");

let changeTurn = null;

choose.forEach((chooseNow) => {
  chooseNow.addEventListener("click", () => {
    if (chooseNow.id === "playerX") {
      changeTurn = false;
      showChange.style.left = `0px`;
    } else {
      changeTurn = true;
      showChange.style.left = `160px`;
    }
    startingPage.style.display = "none";
    mainPage.style.display = "block";
  });
});

boxes.forEach((items) => {
  items.addEventListener("click", () => {
    if (changeTurn == false) {
      items.innerHTML = `X`;
      items.id = "X";
      items.style.pointerEvents = "none";
      showChange.style.left = `160px`;

      changeTurn = true;
    } else {
      items.innerHTML = `O`;
      items.id = "O";
      items.style.pointerEvents = "none";
      showChange.style.left = `0px`;

      changeTurn = false;
    }
    win();
    draw();
  });
});

let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const win = () => {
  for (let a = 0; a <= 7; a++) {
    const b = winningCombination[a];

    if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
      continue;
    } else if (
      boxes[b[0]].id == "X" &&
      boxes[b[1]].id == "X" &&
      boxes[b[2]].id == "X"
    ) {
      winnerName.innerHTML = `Player X wins the Game`;
      mainPage.style.display = "none";
      winner.style.display = "block";
    } else if (
      boxes[b[0]].id == "O" &&
      boxes[b[1]].id == "O" &&
      boxes[b[2]].id == "O"
    ) {
      winnerName.innerHTML = `Player O wins the Game`;
      mainPage.style.display = "none";
      winner.style.display = "block";
    } else {
      continue;
    }
  }
};

const draw = () => {
  if (
    boxes[0].id != "" &&
    boxes[1].id != "" &&
    boxes[2].id != "" &&
    boxes[3].id != "" &&
    boxes[4].id != "" &&
    boxes[5].id != "" &&
    boxes[6].id != "" &&
    boxes[7].id != "" &&
    boxes[8].id != ""
  ) {
    winnerName.innerHTML = `Draw Game`;
    mainPage.style.display = "none";
    winner.style.display = "block";
  }
};

playAgain.addEventListener("click", () => {
  window.location.reload();
});

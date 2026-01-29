let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let winShow = document.querySelector(".win");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn1 = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box was clicked");
    if (turn1 === true) {
      box.innerText = "X";
      turn1 = false;
    } else {
      box.innerText = "O";
      turn1 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turn1 = true;
  enableBox();
  msgContainer.classList.add("hide");
};

let disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Player ${winner} Wins`;
  msgContainer.classList.remove("hide");
};

const draw = () => {
  msg.innerText = `You Both are Good, It's a Draw`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    if (
      boxes[pattern[0]].innerText == "X" &&
      boxes[pattern[1]].innerText == "X" &&
      boxes[pattern[2]].innerText == "X"
    ) {
      showWinner("X");
      disableBox();
      break;
    }
    if (
      boxes[pattern[0]].innerText == "O" &&
      boxes[pattern[1]].innerText == "O" &&
      boxes[pattern[2]].innerText == "O"
    ) {
      showWinner("O");
      disableBox();
      break;
    }
    if (
      ((boxes[0].innerText == "O")||(boxes[0].innerText == "X"))&&
      ((boxes[1].innerText == "O")||(boxes[1].innerText == "X"))&&
      ((boxes[2].innerText == "O")||(boxes[2].innerText == "X"))&&
      ((boxes[3].innerText == "O")||(boxes[3].innerText == "X"))&&
      ((boxes[4].innerText == "O")||(boxes[4].innerText == "X"))&&
      ((boxes[5].innerText == "O")||(boxes[5].innerText == "X"))&&
      ((boxes[6].innerText == "O")||(boxes[6].innerText == "X"))&&
      ((boxes[7].innerText == "O")||(boxes[7].innerText == "X"))&&
      ((boxes[8].innerText == "O")||(boxes[8].innerText == "X"))
    ) {
      draw();
    }
  }
};

resetButton.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);

const message = () => {};

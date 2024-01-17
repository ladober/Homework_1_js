let rockBtn = document.querySelector("#js-btn-rock");
let scissorsBtn = document.querySelector("#js-btn-scissors");
let paperBtn = document.querySelector("#js-btn-paper");

let player = document.querySelector("#js-player-pic");
let pcPlayer = document.querySelector("#js-pc-pic");

let playerCount = document.querySelector("#js-counter-player");
let pcPlayerCount = document.querySelector("#js-counter-pc");

let pCount = 0;
let pcCount = 0;

rockBtn.addEventListener("click", () => {
  player.src = "img/user-moves/rock-1.png";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    pcPlayer.src = "img//user-moves/paper-1.png";
    pcPlayerCount.textContent = ++pcCount;
  } else if (randomNum == 1) {
    pcPlayer.src = "img/user-moves/rock-1.png";
  } else if (randomNum == 2) {
    pcPlayer.src = "img/user-moves/scissors-1.png";
    playerCount.textContent = ++pCount;
  }
});

scissorsBtn.addEventListener("click", () => {
  player.src = "img/user-moves/scissors-1.png";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    pcPlayer.src = "img/user-moves/paper-1.png";
    playerCount.textContent = ++pCount;
  } else if (randomNum == 1) {
    pcPlayer.src = "img/user-moves/rock-1.png";
    pcPlayerCount.textContent = ++pcCount;
  } else if (randomNum == 2) {
    pcPlayer.src = "img/user-moves/scissors-1.png";
  }
});

paperBtn.addEventListener("click", () => {
  player.src = "img/user-moves/paper-1.png";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    pcPlayer.src = "img/user-moves/paper-1.png";
  } else if (randomNum == 1) {
    pcPlayer.src = "img/user-moves/rock-1.png";
    playerCount.textContent = ++pCount;
  } else if (randomNum == 2) {
    pcPlayer.src = "img/user-moves/scissors-1.png";
    pcPlayerCount.textContent = ++pcCount;
  }
});

let rockBtn = document.querySelector("#js-btn-rock");
let scissorsBtn = document.querySelector("#js-btn-scissors");
let paperBtn = document.querySelector("#js-btn-paper");

let player = document.querySelector("#js-player-pic");
let pcPlayer = document.querySelector("#js-pc-pic");

let playerCount = document.querySelector("#js-counter-player");
let pcPlayerCount = document.querySelector("#js-counter-pc");

let winner = document.querySelector("#winner");
let pCount = 0;
let pcCount = 0;

rockBtn.addEventListener("click", () => {
  player.src = "img/user-moves/rr.png";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    pcPlayer.src = "img//user-moves/pp.png";
    pcPlayerCount.textContent = ++pcCount;
  } else if (randomNum == 1) {
    pcPlayer.src = "img/user-moves/rr.png";
  } else if (randomNum == 2) {
    pcPlayer.src = "img/user-moves/ss.png";
    playerCount.textContent = ++pCount;
  }
});

scissorsBtn.addEventListener("click", () => {
  player.src = "img/user-moves/ss.png";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    pcPlayer.src = "img/user-moves/pp.png";
    playerCount.textContent = ++pCount;
  } else if (randomNum == 1) {
    pcPlayer.src = "img/user-moves/rr.png";
    pcPlayerCount.textContent = ++pcCount;
  } else if (randomNum == 2) {
    pcPlayer.src = "img/user-moves/ss.png";
  }
});

paperBtn.addEventListener("click", () => {
  player.src = "img/user-moves/pp.png";
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum == 0) {
    pcPlayer.src = "img/user-moves/pp.png";
  } else if (randomNum == 1) {
    pcPlayer.src = "img/user-moves/rr.png";
    playerCount.textContent = ++pCount;
  } else if (randomNum == 2) {
    pcPlayer.src = "img/user-moves/ss.png";
    pcPlayerCount.textContent = ++pcCount;
  }
});

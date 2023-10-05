const start = document.querySelector(".start");
const reStart = document.querySelector(".restart");
const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");
const end = document.querySelector(".end");
const score = document.querySelector(".score span");
const record = document.querySelector(".record")

let interval = null;
let count = 0;
let records = 0;

// start
start.addEventListener("click", startGame);

function startGame() {
  cactus.classList.add("cactus-move");
  start.classList.add("hide");
  setIntv();
}

// restart
reStart.addEventListener("click", reStartGame);

function reStartGame() {
  cactus.classList.add("cactus-move");
  end.style.display = "none";
  reStart.style.display = "none";
  record.style.display = "block";
  cactus.style.left = "480px"

  records = 0;
  records++
  record.textContent = count;
  count = 0;
  setIntv();
}

// jump
window.addEventListener("click", toJump);

function toJump() {
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 1000);
}

document.addEventListener("keypress", moveDino);

function moveDino(e) {
  if (e.code == "Space") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 1000);
  }
}

function isAlive() {
  const cactusLeft = window.getComputedStyle(cactus).left;
  const dinoTop = window.getComputedStyle(dino).top;

  const left = parseInt(cactusLeft);
  const top = parseInt(dinoTop);

  if (left < 50 && top > 120) {
    end.style.display = "block";
    cactus.classList.remove("cactus-move");
    reStart.style.display = "block";
    cactus.style.left = "35px"
    clearInterval(interval);
  }

  count++;
  records = count;
  console.log(count);
  score.textContent = count;
}

function setIntv() {
  interval = setInterval(isAlive, 120);
}

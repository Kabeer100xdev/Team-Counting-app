let redScreen1 = document.getElementById("redcounter1");
let redScreen2 = document.getElementById("redcounter2");
let score1 = 0;
let score2 = 0;

// FUNCTION FOR SCORE BOARD 1

function Src1increment1() {
  score1 += 1;
  redScreen1.textContent = score1;
}

function Src1increment2() {
  score1 += 2;
  redScreen1.textContent = score1;
}

function Src1increment3() {
  score1 += 3;
  redScreen1.textContent = score1;
}
// FUNCTION FOR SCOREBOARD 2

function Src2increment1() {
  score2 += 1;
  redScreen2.textContent = score2;
}

function Src2increment2() {
  score2 += 2;
  redScreen2.textContent = score2;
}

function Src2increment3() {
  score2 += 3;
  redScreen2.textContent = score2;
}

// FUNCTION FOR RESET BUTTON

function resetscore() {
  score1 = 0;
  score2 = 0;
  redScreen1.textContent = score1;
  redScreen2.textContent = score2;
}

let scores = [710, 695, 720, 742];
let index = 0;

function replay() {
  const scoreEl = document.getElementById("score");
  index = 0;

  const interval = setInterval(() => {
    scoreEl.innerText = scores[index];
    index++;

    if (index === scores.length) {
      clearInterval(interval);
    }
  }, 800);
}

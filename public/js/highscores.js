const highScoresList = document.getElementById("highScoresList");
const resetBtn = document.getElementById("resetButton");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score font-semibold text-xl">${score.name} - <span class="font-extrabold">${score.score}</span></li>`;
  })
  .join("");

resetBtn.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});


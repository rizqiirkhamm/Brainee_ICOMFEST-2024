const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
  
    const score = {
      score: mostRecentScore,
      name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
  
    localStorage.setItem("highScores", JSON.stringify(highScores));
  
    // Update finalScore element with user's name and score
    finalScore.innerText = `${username.value} - ${mostRecentScore}`;

    // Update toast message with user's name
  const nameSpan = document.querySelector(".message .text-2 span");
  nameSpan.textContent = username.value;
  
    // Show toast and navigate to highscores page after 5 seconds
    const timer1 = setTimeout(() => {
      window.location.assign("highscores.html");
    }, 5000); //1s = 1000 milliseconds
  };
  
  const button = document.querySelector(".btn-save"),
        toast = document.querySelector(".toast"),
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");
  
        let timer2;
  
        button.addEventListener("click", () => {
          toast.classList.add("active");
          progress.classList.add("active");
  
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        });
  
        closeIcon.addEventListener("click", () => {
          toast.classList.remove("active");
  
          setTimeout(() => {
            progress.classList.remove("active");
          }, 300);
  
          clearTimeout(timer2);
          clearTimeout(timer1);
        });
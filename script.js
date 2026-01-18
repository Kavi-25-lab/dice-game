const roll_btn = document.querySelector(".btn-roll");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const sumValue = document.querySelector(".sum-value");

let sum = 0;
let Win = document.querySelector(".Win");
let lose = document.querySelector(".lose");

const overlay = document.querySelector(".overlay");
const playAgainBtn = document.querySelector(".play-again");
const maincontainer = document.querySelector(".main-container");

const chkSum = (sum) => {
  if (sum === 10) {
    Win.style.display = "block";
    lose.style.display = "none";
  } else {
    lose.style.display = "block";
    Win.style.display = "none";
  }
};

roll_btn.addEventListener("click", () => {
  roll_btn.disabled = true;

  dice1.classList.add("rolling");
  dice2.classList.add("rolling");

  setTimeout(() => {
    const value1 = Math.floor(Math.random() * 6) + 1;
    const value2 = Math.floor(Math.random() * 6) + 1;

    dice1.src = `./images/dice${value1}.png`;
    dice2.src = `./images/dice${value2}.png`;

    dice1.classList.remove("rolling");
    dice2.classList.remove("rolling");

    sum = value1 + value2;
    sumValue.textContent = sum;
    chkSum(sum);

    setTimeout(() => {
      Win.style.display = "none";
      lose.style.display = "none";
    }, 1000);

    setTimeout(() => {
      maincontainer.classList.add("game-over");
    }, 1200);
  }, 1200);
});

playAgainBtn.addEventListener("click", () => {
  maincontainer.classList.remove("game-over");

  dice1.src = "./images/dice1.png";
  dice2.src = "./images/dice1.png";

  sum = 0;
  sumValue.textContent = 0;
  roll_btn.disabled = false;
});

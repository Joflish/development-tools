const difficultyLevels = [
  document.getElementById("radio1"),
  document.getElementById("radio2"),
  document.getElementById("radio3"),
];
const buttonStart = document.getElementById("start-button");

let main = document.getElementById("main");
let selectedDifficultyLevel;

difficultyLevels.forEach((level, index) => {
  level.addEventListener("click", () => {
    selectedDifficultyLevel = index + 1;
  });
});

buttonStart.addEventListener("click", () => {
  if (selectedDifficultyLevel === 1) {
    main.innerHTML = `Вы выбрали легкий уровень`;
  } else if (selectedDifficultyLevel === 2) {
    main.innerHTML = `Вы выбрали средний уровень`;
  } else if (selectedDifficultyLevel === 3) {
    main.innerHTML = `Вы выбрали сложный уровень`;
  }
});

const difficultyLevels = [
document.getElementById('radio1'),
document.getElementById('radio2'),
document.getElementById('radio3'),
];
const buttonStart = document.getElementById('start-button');

let selectedDifficultyLevel;

difficultyLevels.forEach((level, index) => {
level.addEventListener("click", () => {
    selectedDifficultyLevel = index + 1;
});
});

buttonStart.addEventListener("click", () => {
    console.log(selectedDifficultyLevel);
});



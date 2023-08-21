const difficultyLevelOne = document.getElementById('radio1');
const difficultyLevelTwo = document.getElementById('radio2');
const difficultyLevelThree = document.getElementById('radio3');

difficultyLevelOne.addEventListener("click", () => {
    console.log('Вы выбрали легкий уровень');
});

difficultyLevelTwo.addEventListener("click", () => {
    console.log('Вы выбрали средний уровень');
})

difficultyLevelThree.addEventListener("click", () => {
    console.log('Вы выбрали сложный уровень');
})

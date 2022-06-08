function randomDice() {
    var max = 6;
    var min = 1;
    var random = Math.random();

    var result = Math.floor(random * max) + min;

    document.getElementById("dice").src = "dices/dice" + result + ".png";
}
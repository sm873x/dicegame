var diceGame = {
    timeStamp: new Date(),
    rounds: [],
    rollDice: function rollDice() {
        var dice1 = Math.ceil(Math.random() * 6);
        document.getElementById('dice1').innerHTML = dice1;

        var dice2 = Math.ceil(Math.random() * 6);
        document.getElementById('dice2').innerHTML = dice2;

        if ( (dice1 + dice2) === 7 || (dice1 + dice2) === 11 ) {
            document.getElementById('gameStatus').innerHTML = 'Winner!';
        } else {
            document.getElementById('gameStatus').innerHTML = 'Try Again!';
        }

    }
};

document.getElementById('roll').addEventListener('click', diceGame.rollDice);

console.log( diceGame.timeStamp );




//TIME STAMP
document.getElementById('gameTimeStamp').innerHTML = diceGame.timeStamp;

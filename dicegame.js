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
            var finish = new Date();
            document.getElementById('finalRoundAndTime').innerHTML = 'It took you ' + (diceGame.rounds.length + 1) + ' times and in ' + ( ( finish.getTime() - diceGame.timeStamp.getTime() )/1000 ) + ' seconds';

        } else {
            document.getElementById('gameStatus').innerHTML = 'Try Again!';
        }

        diceGame.rounds.push(dice1 + dice2);
        console.log(diceGame.rounds);
    }
};

//ROLL DICE
document.getElementById('roll').addEventListener('click', diceGame.rollDice);

//TIME STAMP
document.getElementById('gameTimeStamp').innerHTML = "Game began on " + diceGame.timeStamp;

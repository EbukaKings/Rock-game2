let score = JSON.parse(localStorage.getItem('score'));
//console.log(JSON.parse(localStorage.getItem(score)));

if (!score) {
    score = {
        wins: 0,
        loses: 0,
        ties: 0
    }
}
function resultUpdate() {
    document.querySelector('.js-result')
.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties ${score.ties}.`
}
resultUpdate()
document.querySelector('.js-score')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `computer picked ${computerMove}, You picked ${playerMove}.`;
function playGame2(playerMove) {
    const computerMove = playGame1();

    let result = '';
    
    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You lose') {
        score.loses += 1;
    } else if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    resultUpdate();

    alert(`You Picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    Wins: ${score.wins}, Loses: ${score.loses}, Ties ${score.ties}.`);
}
function playGame1() {
    const randomMove = Math.random();

    let computerMove = '';
    if (randomMove >= 0 && randomMove < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomMove >= 2 / 3 && randomMove < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}
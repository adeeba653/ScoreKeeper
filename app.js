const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const rstButton = document.querySelector('#reset')
let winningScoreSelect = document.querySelector('#playto')
let gameOver = false
let winningScore = 0

function updateScores(player, opponent) {
    if (winningScore != 0 && !gameOver) {
        player.score += 1
        player.display.textContent = player.score
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', reset)
rstButton.addEventListener('click', reset)

function reset(e) {
    gameOver = false;
    if (e.target.nodeName === 'BUTTON') {
        winningScoreSelect.value = 0;
    }
    winningScore = Number(winningScoreSelect.value)
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false;
    }
}
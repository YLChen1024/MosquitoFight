var score = 0;
var countdown = 10;

var timer = setInterval(function () {
    var gameOver = false;

    if (document.getElementById('mosquito') === null && gameOver != true) {
        var mosquito = document.createElement('img');

        mosquito.src = 'img/1.jpeg';
        mosquito.style.position = 'absolute';
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerHeight);
        mosquito.style.width = 100 + 'px';
        mosquito.style.top = y + 'px';
        mosquito.style.left = x + 'px';

        mosquito.id = 'mosquito';
        document.body.appendChild(mosquito);
    }
    countdown--;
    document.getElementById('counter').innerHTML = countdown;
    if (countdown <= 0) {
        gameOver = true;
        clearInterval(timer);
        clearInterval(disappear);
        document.getElementById('counter').innerHTML = 'GameOver';
        document.body.removeChild(mosquito);
    }
}, 1000);

var disappear = setInterval(function () {
    if (document.getElementById('mosquito') !== null) {
        document.body.removeChild(mosquito);
    }
}, 3000);

document.body.addEventListener('click', function (e) {
    var scoreBoard = document.getElementById('score-board');
    if (e.target.id === 'mosquito') {
        this.removeChild(e.target);
        score += 5;
        alert('kill');
        scoreBoard.innerHTML = score;
    }
});
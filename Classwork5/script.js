window.addEventListener('load', pageLoaded);

function pageLoaded() {
    var container = document.querySelector('.container'),
        score = document.querySelector('.score'),
        gameOver = document.querySelector('.game-over'),
        duck = document.querySelector('#duck'),
        containerRect = container.getBoundingClientRect();

    setInterval(moveTheDuck, 2000, duck);

    container.addEventListener('click', shootheDuck)

    function shootheDuck(e) {
        var aimDuck = e.target.parentElement;

        if (aimDuck.id === 'duck') {
            score.innerHTML = parseInt(score.innerHTML) + 1;
            moveTheDuck(aimDuck);
        } else if (e.target.tagName === 'BUTTON') {
            gameOver.classList.remove('visible');
        } else {
            gameOver.classList.add('visible');
            score.innerHTML = 0;
        }
    }

    function moveTheDuck(duck) {
        duck.style.top = getRandomInt(1, containerRect.height) + 'px';
        duck.style.left = getRandomInt(1, containerRect.width) + 'px';
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}
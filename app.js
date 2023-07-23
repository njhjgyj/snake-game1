let inputDir = { x: 0, y: 0 };
let speed = 10;
let lastPaintTime = 0;
let snakeArr = [

    { x: 13, y: 15 }    // x means ____ this y means | this OR | this is vertical and ____ this is horizontal.

]

food = { x: 6, y: 7 };
let snakeDiv = document.getElementById('snake-div');
let score = 0;


function main(currentTime) {

    window.requestAnimationFrame(main);

    // console.log(currentTime);

    if ((currentTime - lastPaintTime) / 1000 < 1 / speed) {

        return;

    }

    lastPaintTime = currentTime;
    gameEngine();

};


function isCollide(snake) {

    // return false;

    // if you bump into yourself.
    for (let i = 1; i < snakeArr.length; i++) {

        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {

            return true;

        };

    };

    // If you bump into the wall.
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0) {

        return true;

    };

};


// var snakeElement;
function gameEngine() {

    // Part 1: Updating the snake array & food
    if (isCollide(snakeArr)) {

        inputDir = { x: 0, y: 0 };
        alert("Game Over press any key to play again");
        window.location.reload();

        snakeArr = [{ x: 13, y: 15 }];
        score = 0;

    };


    // If you eaten the food then increment the score and regenrate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {

        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });

        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }

    };


    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        // const element = array[i];
        snakeArr[i + 1] = { ...snakeArr[i] };

    };
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    // Part 2: Display the snake and food
    snakeDiv.innerHTML = '';
    snakeArr.forEach((e, index) => {

        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {

            snakeElement.classList.add('head');    // head = red

        };
        snakeElement.classList.add('snake');    // snake = yellow

        snakeDiv.appendChild(snakeElement);

    });

    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');    // food = purple
    snakeDiv.appendChild(foodElement);
    // console.log(Math.random(0, 10));

};


window.requestAnimationFrame(main);

window.addEventListener('keydown', e => {

    inputDir = { x: 0, y: 1 };    // If any key is press then start the game

    if (e.key == "ArrowUp") {

        inputDir.x = 0;
        inputDir.y = -1;

    } else if (e.key == "ArrowDown") {

        inputDir.x = 0;
        inputDir.y = 1;

    } else if (e.key == "ArrowRight") {

        inputDir.x = 1;
        inputDir.y = 0;

    } else if (e.key == "ArrowLeft") {

        inputDir.x = -1;
        inputDir.y = 0;

    }

});


var mobileBtn = document.getElementsByClassName('btn-class');
var arrowRight = document.getElementById('arrow-right')
var arrowUp = document.getElementById('arrow-up')
var arrowLeft = document.getElementById('arrow-left');
var arrowDown = document.getElementById('arrow-down');

for (let i = 0; i < mobileBtn.length; i++) {

    mobileBtn[i].addEventListener('click', () => {

        if (mobileBtn[i].innerText == '↑') {

            inputDir.x = 0;
            inputDir.y = -1;

        } else if (mobileBtn[i].innerText == '→') {

            inputDir.x = 1;
            inputDir.y = 0;

        } else if (mobileBtn[i].innerText == '↓') {

            inputDir.x = 0;
            inputDir.y = 1;

        } else if (mobileBtn[i].innerText == '←') {

            inputDir.x = -1;
            inputDir.y = 0;

        };

    });

};


var btnForSpeed = document.getElementsByClassName('btn-for-speed-class');
var easyBtn = document.getElementById('easy-btn');
var normalBtn = document.getElementById('normal-btn');
var hardBtn = document.getElementById('hard-btn');
var legendBtn = document.getElementById('legend-btn');

for (let i = 0; i < btnForSpeed.length; i++) {

    btnForSpeed[i].addEventListener('click', () => {

        if (btnForSpeed[i].innerText == 'Easy') {

            speed = 5;

        } else if (btnForSpeed[i].innerText == 'Normal') {

            speed = 8;

        } else if (btnForSpeed[i].innerText == 'Hard') {

            speed = 12;

        } else if (btnForSpeed[i].innerText == 'Legend') {

            speed = 16;

        };

    });

};

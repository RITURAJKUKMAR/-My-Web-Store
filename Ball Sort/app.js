let gameBox = document.querySelector(".game-box");
const cols = ['red', 'green', 'yellow', 'pink', 'deeppink', 'aqua', 'blue', 'blueviolet', 'chartreuse', 'chocolate'];
const val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function start() {
    for (i = 0; i < 6; i++) {
        let bottle = document.createElement("div");
        bottle.className = 'bottle';
        for (j = 0; j < 4; j++)
            bottle.appendChild(createBall());
        gameBox.appendChild(bottle);
    }
}
start();

function createBall() {
    let ball = document.createElement("div");
    ball.className = 'ball';
    let n = (Math.floor(Math.random() * 100 / 10));
    ball.style.background = `radial-gradient(circle at 30% 30%, #ffffff 10%, ${cols[n]} 60%)`;
    console.log(ball);
    return ball;
}

let bottles = document.querySelectorAll(".bottle");
bottles.forEach((bott) => {
    bott.addEventListener("click", () => {
        console.log(bott);
    })
});


// background: radial-gradient(circle at 30% 30%, #ffffff 10%, red 60%);
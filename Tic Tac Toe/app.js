let btns = document.querySelectorAll(".btns");
let ares = document.getElementById("ares");
let resets = document.querySelectorAll(".reset-btn");
let drawPos = document.querySelector(".draw");
let result = document.querySelector(".result");
let wonResult = document.getElementById("won-result");
let lostResult = document.getElementById("lost-result");
let value = 'X';

resets.forEach((reset) => {
    reset.addEventListener("click", () => {
        for (let i = 0; i < 9; i++) {
            btns[i].innerText = '';
            btns[i].removeAttribute('disabled', true);
        }
        drawPos.classList.remove("show");
        drawPos.classList.add("hide");
        result.classList.remove("show");
        result.classList.add("hide");
    });
});

function draw() {
    let d = false;
    for (let i = 0; i < 9; i++) {
        if (btns[i].innerText == "") {
            d = false;
            break;
        }
        else
            d = true;
    }
    if (d == true)
        return true;
    else
        return false;
}

function won() {
    if ((btns[0].innerText == 'X' && btns[1].innerText == 'X' && btns[2].innerText == 'X') || (btns[3].innerText == 'X' && btns[4].innerText == 'X' && btns[5].innerText == 'X') || (btns[6].innerText == 'X' && btns[7].innerText == 'X' && btns[8].innerText == 'X') || (btns[0].innerText == 'X' && btns[4].innerText == 'X' && btns[8].innerText == 'X') || (btns[2].innerText == 'X' && btns[4].innerText == 'X' && btns[6].innerText == 'X') || (btns[0].innerText == 'X' && btns[3].innerText == 'X' && btns[6].innerText == 'X') || (btns[1].innerText == 'X' && btns[4].innerText == 'X' && btns[7].innerText == 'X') || (btns[2].innerText == 'X' && btns[5].innerText == 'X' && btns[8].innerText == 'X')) {
        wonResult.innerText = "X - WON";
        lostResult.innerText = "O - LOST";
        result.classList.remove("hide");
        result.classList.add("show");
        ares.click();
        return true;
    }
    else if ((btns[0].innerText == 'O' && btns[1].innerText == 'O' && btns[2].innerText == 'O') || (btns[3].innerText == 'O' && btns[4].innerText == 'O' && btns[5].innerText == 'O') || (btns[6].innerText == 'O' && btns[7].innerText == 'O' && btns[8].innerText == 'O') || (btns[0].innerText == 'O' && btns[4].innerText == 'O' && btns[8].innerText == 'O') || (btns[2].innerText == 'O' && btns[4].innerText == 'O' && btns[6].innerText == 'O') || (btns[0].innerText == 'O' && btns[3].innerText == 'O' && btns[6].innerText == 'O') || (btns[1].innerText == 'O' && btns[4].innerText == 'O' && btns[7].innerText == 'O') || (btns[2].innerText == 'O' && btns[5].innerText == 'O' && btns[8].innerText == 'O')) {
        wonResult.innerText = "O - WON";
        lostResult.innerText = "X - LOST";
        result.classList.remove("hide");
        result.classList.add("show");
        ares.click();
        return true;
    }
    return false;
}

function disabls(){
    for(let i=0;i<9;i++)
        btns[i].setAttribute('disabled', true);
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if ('X' == value) {
            btn.innerText = 'X';
            value = 'O';
        }
        else {
            btn.innerText = 'O';
            value = 'X';
        }

        btn.setAttribute('disabled', true);
        if (won()) {
            disabls();
        }
        else if (draw()) {
            drawPos.classList.remove("hide");
            drawPos.classList.add("show");
            disabls();
        }
    });
});
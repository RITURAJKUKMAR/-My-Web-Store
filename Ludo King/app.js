let dashbordContainer = document.querySelector(".dashbord-container");
let container = document.querySelector(".container");

let pls = document.querySelectorAll("#pl");
let coms = document.querySelectorAll("#com");
let pl = 4;
let com = 0;
let Tpl = 4;

pls.forEach((btn) => {
    btn.addEventListener(("click"), () => {
        pl = Number(btn.innerText);
    });
});

coms.forEach((btn) => {
    btn.addEventListener(("click"), () => {
        com = Number(btn.innerText);
    });
});

function start() {
    if (pl + com <= 4) {
        Tpl = pl + com;
        // console.log(Tpl);
        dashbordContainer.classList.add("hide");
        container.classList.add("show");
    }
    else
        alert("Something went wrong!");
}


let pos = 1;
let GArr = [21, 22, 23, 24, 25, 17, 14, 11, 8, 5, 1, 2, 3, 7, 10, 13, 16, 19, 27, 28, 29, 30, 31, 32, 44, 56, 55, 54, 53, 52, 51, 60, 64, 67, 70, 73, 76, 75, 74, 71, 68, 65, 62, 58, 50, 49, 48, 47, 46, 45, 33, 34, 35, 36, 37, 38, 26]
let RArr = [71, 68, 65, 62, 58, 50, 49, 48, 47, 46, 45, 33, 20, 21, 22, 23, 24, 25, 17, 14, 11, 8, 5, 1, 2, 3, 7, 10, 13, 16, 19, 27, 28, 29, 30, 31, 32, 44, 56, 55, 54, 53, 52, 51, 60, 64, 67, 70, 73, 76, 75, 72, 69, 66, 63, 59, 26]
let BArr = [55, 54, 53, 52, 51, 60, 64, 67, 70, 73, 76, 75, 74, 71, 68, 65, 62, 58, 50, 49, 48, 47, 46, 45, 33, 20, 21, 22, 23, 24, 25, 17, 14, 11, 8, 5, 1, 2, 3, 7, 10, 13, 16, 19, 27, 28, 29, 30, 31, 32, 44, 43, 42, 41, 40, 39, 26]
let YArr = [7, 10, 13, 16, 19, 27, 28, 29, 30, 31, 32, 44, 56, 55, 54, 53, 52, 51, 60, 64, 67, 70, 73, 76, 75, 74, 71, 68, 65, 62, 58, 50, 49, 48, 47, 46, 45, 33, 20, 21, 22, 23, 24, 25, 17, 14, 11, 8, 5, 1, 2, 6, 9, 12, 15, 18, 26]
class token {
    constructor() {
        this.first = -1;
        this.second = -1;
        this.third = -1;
        this.fourth = -1;
        this.win = false;
        this.division = 0;
    }
    cancel(tokenNo) {
        // console.log(tokenNo);
        if (tokenNo == '1')
            this.first = -1;
        else if (tokenNo == '2')
            this.second = -1;
        else if (tokenNo == '3')
            this.third = -1;
        else
            this.fourth = -1;
    }
    enableBnt(name) {
        for (let i = 1; i <= 4; i++) {
            let curr = document.querySelector("." + name + i);
            curr.removeAttribute('disabled', true);
            curr.style.zIndex = '1';
            // console.log("enable");
        }
    }
    disabledBtn(name) {
        for (let i = 1; i <= 4; i++) {
            let curr = document.querySelector("." + name + i);
            curr.setAttribute('disabled', true);
            curr.style.zIndex = '0';
            // console.log("desible");
        }
    }
    moves(num, token, ok) {
        let span = document.querySelectorAll("span");
        // console.log(num, token);
        switch (token.className[1]) {
            case '1':
                if (this.first == -1) {
                    if (num == 6) {
                        num = this.first++;
                        token.className = token.className + ' absolute'
                        // console.log(this.first);
                        switch (token.className[0]) {
                            case 'G':
                                span[GArr[this.first]].appendChild(token);
                                ok = 1;
                                break;
                            case 'R':
                                span[RArr[this.first]].appendChild(token);
                                ok = 1;
                                break;
                            case 'Y':
                                span[YArr[this.first]].appendChild(token);
                                ok = 1;
                                break;
                            case 'B':
                                span[BArr[this.first]].appendChild(token);
                                ok = 1;
                                break;
                        }
                    }
                }
                else if (GArr.length > this.first + num) {
                    this.first = this.first + num;
                    // console.log(this.first);
                    switch (token.className[0]) {
                        case 'G':
                            span[GArr[this.first]].appendChild(token);
                            ok = 1;
                            break;
                        case 'R':
                            span[RArr[this.first]].appendChild(token);
                            ok = 1;
                            break;
                        case 'Y':
                            span[YArr[this.first]].appendChild(token);
                            ok = 1;
                            break;
                        case 'B':
                            span[BArr[this.first]].appendChild(token);
                            ok = 1;
                            break;
                    }
                }
                break;
            case '2':
                if (this.second == -1) {
                    if (num == 6) {
                        num = this.second++;
                        // console.log(this.second);
                        token.className = token.className + ' absolute'
                        switch (token.className[0]) {
                            case 'G':
                                span[GArr[this.second]].appendChild(token);
                                ok = 1;
                                break;
                            case 'R':
                                span[RArr[this.second]].appendChild(token);
                                ok = 1;
                                break;
                            case 'Y':
                                span[YArr[this.second]].appendChild(token);
                                ok = 1;
                                break;
                            case 'B':
                                span[BArr[this.second]].appendChild(token);
                                ok = 1;
                                break;
                        }
                    }
                }
                else if (GArr.length > this.second + num) {
                    this.second = this.second + num;
                    // console.log(this.second);
                    switch (token.className[0]) {
                        case 'G':
                            span[GArr[this.second]].appendChild(token);
                            ok = 1;
                            break;
                        case 'R':
                            span[RArr[this.second]].appendChild(token);
                            ok = 1;
                            break;
                        case 'Y':
                            span[YArr[this.second]].appendChild(token);
                            ok = 1;
                            break;
                        case 'B':
                            span[BArr[this.second]].appendChild(token);
                            ok = 1;
                            break;
                    }
                }
                break;
            case '3':
                if (this.third == -1) {
                    if (num == 6) {
                        num = this.third++;
                        // console.log(this.third);
                        token.className = token.className + ' absolute'
                        switch (token.className[0]) {
                            case 'G':
                                span[GArr[this.third]].appendChild(token);
                                ok = 1;
                                break;
                            case 'R':
                                span[RArr[this.third]].appendChild(token);
                                ok = 1;
                                break;
                            case 'Y':
                                span[YArr[this.third]].appendChild(token);
                                ok = 1;
                                break;
                            case 'B':
                                span[BArr[this.third]].appendChild(token);
                                ok = 1;
                                break;
                        }
                    }
                }
                else if (GArr.length > this.third + num) {
                    this.third = this.third + num;
                    // console.log(this.third);
                    switch (token.className[0]) {
                        case 'G':
                            span[GArr[this.third]].appendChild(token);
                            ok = 1;
                            break;
                        case 'R':
                            span[RArr[this.third]].appendChild(token);
                            ok = 1;
                            break;
                        case 'Y':
                            span[YArr[this.third]].appendChild(token);
                            ok = 1;
                            break;
                        case 'B':
                            span[BArr[this.third]].appendChild(token);
                            ok = 1;
                            break;
                    }
                }
                break;
            case '4':
                if (this.fourth == -1) {
                    if (num == 6) {
                        num = this.fourth++;
                        // console.log(this.fourth);
                        token.className = token.className + ' absolute';
                        switch (token.className[0]) {
                            case 'G':
                                span[GArr[this.fourth]].appendChild(token);
                                ok = 1;
                                break;
                            case 'R':
                                span[RArr[this.fourth]].appendChild(token);
                                ok = 1;
                                break;
                            case 'Y':
                                span[YArr[this.fourth]].appendChild(token);
                                ok = 1;
                                break;
                            case 'B':
                                span[BArr[this.fourth]].appendChild(token);
                                ok = 1;
                                break;
                        }
                    }
                }
                else if (GArr.length > this.fourth + num) {
                    this.fourth = this.fourth + num;
                    // console.log(this.fourth);
                    switch (token.className[0]) {
                        case 'G':
                            span[GArr[this.fourth]].appendChild(token);
                            ok = 1;
                            break;
                        case 'R':
                            span[RArr[this.fourth]].appendChild(token);
                            ok = 1;
                            break;
                        case 'Y':
                            span[YArr[this.fourth]].appendChild(token);
                            ok = 1;
                            break;
                        case 'B':
                            span[BArr[this.fourth]].appendChild(token);
                            ok = 1;
                            break;
                    }
                }
                break;
        }
        if (this.first == 56 && this.second == 56 && this.third == 56 && this.fourth == 56) {
            this.win = true;
            switch (token.className[0]) {
                case 'G':
                    let bg = document.querySelector("#green-box");
                    bg.innerText = `${pos++}`;
                    bg.style.fontSize = '30px';
                    break;
                case 'R':
                    let br = document.querySelector("#red-box");
                    br.innerText = `${pos++}`;
                    br.style.fontSize = '30px';
                    break;
                case 'Y':
                    let by = document.querySelector("#yellow-box");
                    by.innerText = `${pos++}`;
                    by.style.fontSize = '30px';
                    break;
                case 'B':
                    let bb = document.querySelector("#blue-box");
                    bb.innerText = `${pos++}`;
                    bb.style.fontSize = '30px';
                    break;
            }
            next();
        }
        return ok;
    }
}

let green = new token();
let red = new token();
let blue = new token();
let yellow = new token();

let bord = document.querySelector(".ladder-bord");
for (let i = 0; i < 77; i++) {
    let span = document.createElement("span");
    if (i == 0) {
        span.id = 'green-box';
        span.innerText = '1';
        let div = document.createElement("div");
        for (let j = 1; j <= 4; j++) {
            let btn = document.createElement("button");
            btn.innerText = `G${j}`;
            btn.className = `G${j}`;
            btn.id = 'btns';
            div.appendChild(btn);
        }
        span.appendChild(div);
    }
    if (i == 4) {
        span.id = 'yellow-box';
        span.innerText = '2';
        let div = document.createElement("div");
        for (let j = 1; j <= 4; j++) {
            let btn = document.createElement("button");
            btn.innerText = `Y${j}`;
            btn.className = `Y${j}`;
            btn.id = 'btns';
            div.appendChild(btn);
        }
        span.appendChild(div);
    }
    if (i == 26) {
        span.id = 'home-box';
        span.innerText = "HOME";
    }
    if (i == 57) {
        span.id = 'red-box';
        span.innerText = '3';
        let div = document.createElement("div");
        for (let j = 1; j <= 4; j++) {
            let btn = document.createElement("button");
            btn.innerText = `R${j}`;
            btn.className = `R${j}`;
            btn.id = 'btns';
            div.appendChild(btn);
        }
        span.appendChild(div);
    }
    if (i == 61) {
        span.id = 'blue-box';
        span.innerText = '4';
        let div = document.createElement("div");
        for (let j = 1; j <= 4; j++) {
            let btn = document.createElement("button");
            btn.innerText = `B${j}`;
            btn.className = `B${j}`;
            btn.id = 'btns';
            div.appendChild(btn);
        }
        span.appendChild(div);
    }
    if (i == 21 || i > 33 && i < 39)
        span.className = 'green-col';
    if (i == 6 || i == 7 || i == 9 || i == 12 || i == 15 || i == 18)
        span.className = 'yellow-col';
    if (i == 72 || i == 71 || i == 59 || i == 63 || i == 66 || i == 69)
        span.className = 'red-col';
    if (i == 55 || i > 38 && i < 44)
        span.className = 'blue-col';
    if (i == 47 || i == 70 || i == 30 || i == 8) {
        span.innerText = '☆';
        span.className = 'star';
    }

    // span.innerText = i + 1;
    bord.appendChild(span);
}

let num = 0;
let btns = document.querySelectorAll('#btns');
btns.forEach(btn => {
    btn.addEventListener(("click"), () => {
        // console.log(btn.innerText[0]);
        // console.log("click");
        let ok = 0;
        switch (btn.innerText[0]) {
            case 'G':
                ok = green.moves(num, btn, ok);
                if (ok == 1)
                    green.disabledBtn(btn.innerText[0]);
                break;
            case 'R':
                ok = red.moves(num, btn, ok);
                if (ok == 1)
                    red.disabledBtn(btn.innerText[0]);
                break;
            case 'B':
                ok = blue.moves(num, btn, ok);
                if (ok == 1)
                    blue.disabledBtn(btn.innerText[0]);
                break;
            case 'Y':
                ok = yellow.moves(num, btn, ok);
                if (ok == 1)
                    yellow.disabledBtn(btn.innerText[0]);
                break;
        }
        for (let i = 0; i < 77; i++) {
            let span = document.querySelectorAll("span");
            if (i != 0 && i != 4 && i != 57 && i != 61 && i != 21 && i != 47 && i != 8 && i != 7 && i != 30 && i != 55 && i != 70 && i != 71 && i != 26) {
                if (span[i].childNodes.length == 2) {
                    // console.log(span[i].childNodes[0]);
                    // console.log(span[i].childNodes[1].innerText[0]);
                    // console.log(span[i].childNodes[0].innerText);
                    // console.log(btn.innerText);
                    if (btn.innerText[0] != span[i].childNodes[0].innerText[0]) {
                        let tokenNo=span[i].childNodes[0].innerText[1];
                        switch (span[i].childNodes[0].innerText[0]) {
                            case 'G':
                                let greenBox = document.querySelector('#green-box');
                                span[i].childNodes[0].classList.remove("absolute");
                                greenBox.childNodes[1].appendChild(span[i].childNodes[0]);
                                suffle-=2;
                                next();
                                green.cancel(tokenNo);
                                break;
                            case 'Y':
                                let yellowBox = document.querySelector('#yellow-box');
                                span[i].childNodes[0].classList.remove("absolute");
                                yellowBox.childNodes[1].appendChild(span[i].childNodes[0]);
                                suffle-=2;
                                next();
                                yellow.cancel(tokenNo);
                                break;
                            case 'R':
                                let redBox = document.querySelector('#red-box');
                                span[i].childNodes[0].classList.remove("absolute");
                                redBox.childNodes[1].appendChild(span[i].childNodes[0]);
                                suffle-=2;
                                next();
                                red.cancel(tokenNo);
                                break;
                            case 'B':
                                let blueBox = document.querySelector('#blue-box');
                                span[i].childNodes[0].classList.remove("absolute");
                                blueBox.childNodes[1].appendChild(span[i].childNodes[0]);
                                suffle-=2;
                                next();
                                blue.cancel(tokenNo);
                                break;
                        }
                        // console.log('cancel token');
                    }
                    break;
                }
            }
        }
    });
});

let suffle = -1;
let dices = document.querySelectorAll("#dice");
dice.innerText = num;

function next() {
    suffle = (suffle + 1) % pl;
    for (let i = 0; i < 4; i++) {
        dices[i].classList.remove('show');
        dices[i].classList.add('hide');
    }
    dices[suffle].classList.remove('hide');
    dices[suffle].classList.add('show');
    dices[suffle].innerText = num;
    switch (dices[suffle].className[0]) {
        case 'g':
            if (green.win == true)
                next();
            break;
        case 'y':
            if (yellow.win == true)
                next();
            break;
        case 'r':
            if (red.win == true)
                next();
            break;
        case 'b':
            if (blue.win == true)
                next();
            break;
    }
}

dices.forEach(dice => {
    dice.addEventListener(("click"), () => {
        num = (Math.floor(Math.random() * 100) % 6) + 1;
        dice.innerText = num;
        // console.log(num);
        switch (dice.value) {
            case 'green-dice':
                // console.log('green-dice');
                green.enableBnt('G');
                yellow.disabledBtn('Y');
                red.disabledBtn('R');
                blue.disabledBtn('B');
                break;
            case 'red-dice':
                // console.log('red-dice');
                red.enableBnt('R');
                green.disabledBtn('G');
                yellow.disabledBtn('Y');
                blue.disabledBtn('B');
                break;
            case 'yellow-dice':
                // console.log('yellow-dice');
                yellow.enableBnt('Y');
                blue.disabledBtn('B');
                green.disabledBtn('G');
                red.disabledBtn('R');
                break;
            case 'blue-dice':
                // console.log('blue-dice');
                green.disabledBtn('G');
                red.disabledBtn('R');
                yellow.disabledBtn('Y');
                blue.enableBnt('B');
                break;
        }
        if (num != 6) {
            next();
        }
    });
});

function computer(comNo) {
    dices[comNo].click();
}

next();
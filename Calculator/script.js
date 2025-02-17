let buttons = document.querySelectorAll("button");
let input = document.querySelector("input");
let output = document.querySelector("#out");
let symbol = document.createElement("p");
symbol.setAttribute('id', 'symbol');
var data = '';
let m = Array();

setInterval(() => {
    // if (data != "")
    //     console.log("Delayed for 1 second.");
    data = input.value;
    if (data.at(-1) == '=') {
        data = data.replace(data[data.length - 1], "");
        calculation();
    }
    else if (data.at(-1) == 'c' || data.at(-1) == 'C')
        clearData();
    else if (data.at(-1) == '%') {
        data = data.replace(data[data.length - 1], "");
        input.value = data;
        input.scroll(1000, 0);
        persentage();
    }
    input.setAttribute('autofocus', true);
}, 500);

function storeData(curr) {
    data += curr;
    input.value = data;
    input.scroll(1000, 0);
}

function clearData() {
    data = '';
    input.value = data;
    output.innerText = data;
    ans = data;
    symbol.innerText = ' ';
    sqrt = false;
    btnSymbol = '';
}

function isOperator() {
    if (data.at(-1) == '+');
}

function calculation() {
    let ans = solution(data);
    input.value = ans;
    data = ans;
    output.innerText = data;
}

function square() {
    let ans = solution(data);
    input.value = ans ** 2;
    data = ans;
    output.innerText = data ** 2;
}

function squareRoot() {
    let ans = solution(data);
    input.value = ans ** 0.5;
    data = ans;
    output.innerText = data ** 0.5;
}

function persentage() {
    let ans = solution(data);
    input.value = ans / 100;
    data = ans;
    output.innerText = data / 100;
}

function Msolution() {
    let sum = 0;
    for (let i = 0; i < m.length; i++)
        sum = sum + m[i];
    return sum;
}

function Mcalculation(s) {
    let ans = solution(data);
    if (s == '+')
        ans = (+ans);
    else if (s == '-')
        ans = (-ans);
    else
        ans = Msolution();
    input.value = '';
    m.push(ans);
    data = ans;
    output.innerText = ans;
}

function solution(entered) {
    let n1 = 0;
    let n2 = 0;
    let l = entered.length;
    let o1 = '';
    for (i = 0; i < l;) {
        while (entered[i] == '.' || entered[i] == '0' || entered[i] == '1' || entered[i] == '2' || entered[i] == '3' || entered[i] == '4' || entered[i] == '5' || entered[i] == '6' || entered[i] == '7' || entered[i] == '8' || entered[i] == '9') {
            n1 += entered[i];
            i++;
        }
        while (entered[i] == '+' || entered[i] == '-' || entered[i] == '*' || entered[i] == '/') {
            switch (entered[i]) {
                case '+': o1 = '+';
                    break;
                case '-': o1 = '-';
                    break;
                case '/': o1 = '/';
                    break;
                case '*': o1 = '*';
                    break;
            }
            i++;
        }
        while (entered[i] == '.' || entered[i] == '0' || entered[i] == '1' || entered[i] == '2' || entered[i] == '3' || entered[i] == '4' || entered[i] == '5' || entered[i] == '6' || entered[i] == '7' || entered[i] == '8' || entered[i] == '9') {
            n2 += entered[i];
            i++;
        }
        switch (o1) {
            case '+': n1 = Number(n1) + Number(n2); n2 = 0;
                break;
            case '-': n1 = Number(n1) - Number(n2); n2 = 0;
                break;
            case '*': n1 = Number(n1) * Number(n2); n2 = 0;
                break;
            case '/': n1 = Number(n1) / Number(n2); n2 = 0;
                break;
        }
    }
    return n1;
}

let sqrt = false;
let Mbtn = false;
let btnSymbol = '';
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // console.log(btn.innerText);
        switch (btn.innerText) {
            case 'C':
            case 'CE':
                clearData();
                break;
            case '⌫':
                data = data.replace(data[data.length - 1], "");
                input.value = data;
                input.scroll(1000, 0);
                break;
            case '%':
                persentage();
                break;
            case '÷':
                storeData('/');
                break;
            case '×':
                storeData('*');
                break;
            case 'x2':
                square();
                break;
            case '2√':
                sqrt = true;
                btnSymbol = '2√';
                break;
            case '1/x':
                storeData('1/');
                break;
            case 'M':
            case 'MS':
                Mbtn = true;
                btnSymbol = 'M';
                break;
            case 'M+':
                if (Mbtn == true)
                    Mcalculation('+');
                break;
            case 'M-':
                if (Mbtn == true)
                    Mcalculation('-');
                break;
            case 'MR':
                if (Mbtn == true)
                    Mcalculation('=');
                break;
            case 'MC':
                while (m.length)
                    m.pop();
                output.innerText = '';
                btnSymbol = '';
                break;
            case '+/-':
                storeData('-');
                break;
            case '=':
                if (sqrt == true)
                    squareRoot();
                else
                    calculation();
                break;
            default:
                storeData(btn.innerText);
        }
        symbol.innerText = btnSymbol;
        output.appendChild(symbol);
    })
})
var arr = Array();
var index = 0;
var flag = true;
var dataAll = document.querySelectorAll(".data");
var info = document.querySelector(".info");

function generateNum() {
    dataAll.forEach((data) => {
        n = Math.floor((Math.random() * 250) + 50);
        data.style.height = n + 'px';
        arr.push(n);
    });
}
generateNum();

function setData() {
    dataAll.forEach((data, i) => {
        data.style.height = arr[i] + 'px';
    });
}

function nextBubbleSort(j) {
    if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
    setData();
}

function prevBubbleSort(j) {
    if (arr[j] > arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
    }
    setData();
}

function nextBubble() {
    if (index == 9)
        index = 0;
    if (flag) {
        info.innerText = 'COMPARING...';
        dataAll[index].style.backgroundColor = 'red';
        if (index < 8)
            dataAll[index + 1].style.backgroundColor = 'red';
        flag = false;
    }
    else {
        info.innerText = 'SWAPPING...';
        dataAll[index].style.backgroundColor = 'rgb(19, 106, 159)';
        if (index < 8)
            dataAll[index + 1].style.backgroundColor = 'rgb(19, 106, 159)';
        nextBubbleSort(index++);
        flag = true;
    }
}

function prevBubble() {
    if (index == 0)
        index = 8;
    if (flag) {
        info.innerText = 'COMPARING...';
        dataAll[index].style.backgroundColor = 'red';
        if (index > 0)
            dataAll[index - 1].style.backgroundColor = 'red';
        flag = false;
    }
    else {
        info.innerText = 'SWAPPING...';
        dataAll[index].style.backgroundColor = 'rgb(19, 106, 159)';
        if (index > 0)
            dataAll[index - 1].style.backgroundColor = 'rgb(19, 106, 159)';
        prevBubbleSort(index--);
        flag = true;
    }
}
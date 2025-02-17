let index2 = 0;
let minVal = arr[0];
let minIndex = 0;
function findIndex(index2) {
    if (arr[index2] < minVal) {
        dataAll[arr.indexOf(minVal)].style.backgroundColor = 'rgb(19, 106, 159)';
        minVal = arr[index2];
        dataAll[index2].style.backgroundColor = 'yellow';
        minIndex = index2;
    } else {
        minIndex = arr.indexOf(minVal);
        dataAll[minIndex].style.backgroundColor = 'yellow';
    }
}

function nextSelection() {
    if (index2 == 9) {
        dataAll[arr.indexOf(minVal)].style.backgroundColor = 'rgb(19, 106, 159)';
        let temp = arr[minIndex];
        arr[minIndex] = arr[index];
        arr[index] = temp;
        setData();
        dataAll[index++].style.backgroundColor = 'green';
        if(index==9)
            index=0;
        index2 = index;
        minVal = arr[index];
        info.innerText = 'SWAPPING...';
        flag = true;
    }
    if (flag) {
        info.innerText = 'COMPARING...';
        dataAll[index2].style.backgroundColor = 'red';
        flag = false;
    } else {
        info.innerText = 'MIN-VAL';
        dataAll[index2].style.backgroundColor = 'rgb(19, 106, 159)';
        findIndex(index2++);
        setData();
        flag = true;
    }
}
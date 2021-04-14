let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let counter = document.getElementById('input-box');
let add = document.getElementById('btnAdd');
let sub = document.getElementById('btnSub');
let equal = document.getElementById('btnEqual');
let clear = document.getElementById('clear');

btn0.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 0
    } else {
        val += 0
    }
    counter.innerText = val;
})
btn1.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 1
    } else {
        val += 1
    }
    counter.innerText = val;
})
btn2.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 2
    } else {
        val += 2
    }
    counter.innerText = val;
})
btn3.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 3
    } else {
        val += 3
    }
    counter.innerText = val;
})
btn4.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 4
    } else {
        val += 4
    }
    counter.innerText = val;
})
btn5.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 5
    } else {
        val += 5
    }
    counter.innerText = val;
})
btn6.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 6
    } else {
        val += 6
    }
    counter.innerText = val;
})
btn7.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 7
    } else {
        val += 7
    }
    counter.innerText = val;
})
btn8.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 8
    } else {
        val += 8
    }
    counter.innerText = val;
})
btn9.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 9
    } else {
        val += 9
    }
    counter.innerText = val;
})
add.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 0
    } else {
        operator = '+'
    }
    counter.innerText += operator;
})
sub.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 0
    } else {
        operator = '-'
    }
    counter.innerText += operator;
})

equal.addEventListener("click", function () {
    let val = counter.innerText;
    if (val == 0) {
        val = 0
    } else {
        console.log(eval(val));
    }
    counter.innerText = eval(val);
}) 
clear.addEventListener("click", function () {
    counter.innerText = 0;
})
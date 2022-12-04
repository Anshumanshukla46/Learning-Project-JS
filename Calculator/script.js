let res = document.getElementById('res');
let c = document.getElementById('c');
let sc = document.getElementById('bo');

c.addEventListener('click', clear);
function clear() {
    res.innerHTML = "";
    sc.innerHTML = "Start Calculating";
}

let one = document.getElementById('1');
one.addEventListener('click', function () { res.innerHTML += "1"; });

let two = document.getElementById('2');
two.addEventListener('click', function () { res.innerHTML += "2"; });

let three = document.getElementById('3');
three.addEventListener('click', function () { res.innerHTML += "3"; });

let four = document.getElementById('4');
four.addEventListener('click', function () { res.innerHTML += "4"; });

let five = document.getElementById('5');
five.addEventListener('click', function () { res.innerHTML += "5"; });


let six = document.getElementById('6');
six.addEventListener('click', function () { res.innerHTML += "6"; });

let seven = document.getElementById('7');
seven.addEventListener('click', function () { res.innerHTML += "7"; });

let eight = document.getElementById('8');
eight.addEventListener('click', function () { res.innerHTML += "8"; });

let nine = document.getElementById('9');
nine.addEventListener('click', function () { res.innerHTML += "9"; });

let zero = document.getElementById('0');
zero.addEventListener('click', function () { res.innerHTML += "0" });

let dot = document.getElementById('dot');
dot.addEventListener('click', function () { res.innerHTML += "." });


let plus = document.getElementById('+');
let minus = document.getElementById('-');
let multi = document.getElementById('*');
let div = document.getElementById('/');

var num = 0, sign = "", isOpr = false;

plus.addEventListener('click', function () {
    storeResult('+'); // passed sign
    isOpr = true;
});


minus.addEventListener('click', function () {
    storeResult('-'); // passed sign
    isOpr = true;
});


multi.addEventListener('click', function () {
    storeResult('*'); // passed sign
    isOpr = true;
});


div.addEventListener('click', function () {
    storeResult('/'); // passed sign
    isOpr = true;
});



function storeResult(mes) {
    num = parseFloat(res.innerHTML);
    sign = mes;

    sc.innerHTML = num + " " + sign;

    res.innerHTML = "";

    console.log(num + " " + sign);
}



let equal = document.getElementById('=');
equal.addEventListener('click', function () {
    answer();
})

function answer() {
    if (isOpr) {
        let x = parseFloat(res.innerHTML);

        switch (sign) {
            case '+':
                res.innerHTML = num + x;
                break;

            case '-':
                res.innerHTML = num - x;
                break;

            case '/':
                if (x === 0) {
                    alert('Division by zero(0) is not possible.');
                    res.innerHTML = "";
                    sc.innerHTML = "Start Calculating";
                    return;
                }
                res.innerHTML = num / x;
                break;

            case '*':
                res.innerHTML = num * x;
        }

        console.log(num + " " + sign + " " + x + " = " + res.innerHTML);

        alert(num + " " + sign + " " + x + " = " + res.innerHTML);

        sc.innerHTML = "Previous result : " + num + " " + sign + " " + x + " = " + res.innerHTML;

        res.innerHTML = "";
    }
}
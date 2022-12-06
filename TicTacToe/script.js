let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let btn = document.getElementById('reset');
let sp = document.getElementById('navigation');

var turn = true; // true -> X, false -> O
var cnt = 0; // even -> X, odd -> O

// minimum cnt = 5 required for any win

one.addEventListener('click', function () {
    setValue(1, one);
});

two.addEventListener('click', function () {
    setValue(2, two);
});

three.addEventListener('click', function () {
    setValue(3, three);
});

four.addEventListener('click', function () {
    setValue(4, four);
});

five.addEventListener('click', function () {
    setValue(5, five);
});

six.addEventListener('click', function () {
    setValue(6, six);
});

seven.addEventListener('click', function () {
    setValue(7, seven);
});

eight.addEventListener('click', function () {
    setValue(8, eight);
});

nine.addEventListener('click', function () {
    setValue(9, nine);
});




function setValue(x, elem) {
    console.log(x);

    if ((cnt & 1) == 0) {
        elem.setAttribute("value", "X");
        elem.style.backgroundColor = "#913ccd";
        elem.style.color = "white";
    } else {
        elem.style.backgroundColor = "#5381e6";
        elem.style.color = "white";
        elem.setAttribute("value", "O");
    }


    elem.disabled = "true";

    cnt++;
    if ((cnt & 1) == 0) {
        sp.innerHTML = "Player X Turn";
        // sp.style.backgroundColor = "#8aafff";
        sp.style.color = "#913ccd";
    } else {
        sp.innerHTML = "Player O Turn";
        // sp.style.backgroundColor = "#d3e0fe";
        sp.style.color = "#5381e6";
    }

    if (cnt >= 5) {
        checkWin();
    }

    if (cnt == 8) {
        alert('Draw');
        reset();
    }


}


function checkWin() {

    //123
    if (one.value == two.value && two.value == three.value) {
        reset();
        alert("Player " + one.value + " Wins!");

        console.log("one");


        return;
    }


    if (one.value == four.value && four.value == seven.value) {
        alert("Player " + one.value + " Wins!");
        console.log("two");

        reset();
        return;
    }

    if (one.value == five.value && five.value == nine.value) {
        alert("Player " + one.value + " Wins!");
        console.log("three");

        reset();
        return;
    }



    if (two.value == five.value && five.value == eight.value) {
        alert("Player " + two.value + " Wins!");
        console.log("four");

        reset();
        return;
    }

    if (three.value == six.value && six.value == nine.value) {
        alert("Player " + three.value + " Wins!");
        console.log("five");

        reset();
        return;
    }

    if (three.value == five.value && five.value == seven.value) {
        alert("Player " + three.value + " Wins!");
        console.log("six");

        reset();
        return;
    }


    if (four.value == five.value && five.value == six.value) {
        alert("Player " + four.value + " Wins!");
        console.log("seven");

        reset();
        return;
    }


    if (seven.value == eight.value && eight.value == nine.value) {
        alert("Player " + seven.value + " Wins!");
        console.log("eight");

        reset();
        return;
    }
}

function reset() {
    location.reload();
    // one.value = "1";
    // one.disabled = "false";


    // two.value = "2";
    // two.disabled = "false";


    // three.value = "3";
    // three.disabled = "false";

    // four.value = "4";
    // four.disabled = "false";


    // five.value = "5";
    // five.disabled = "false";

    // six.value = "6";
    // six.disabled = "false";

    // seven.value = "7";
    // seven.disabled = "false";


    // eight.value = "8";
    // eight.disabled = "false";

    // nine.value = "9";
    // nine.disabled = "false";

    // cnt = 0;
}

btn.addEventListener('click', reset);

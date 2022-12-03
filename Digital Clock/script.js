setInterval(getTime, 1000);

function getTime() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    let res = "";
    let is12 = false;
    if (hrs >= 12 && hrs <= 23) {
        is12 = true;
        // res = hrs + " : " + mins + " : " + sec + " PM";
    } else {
        // res += " AM";
    }

    if (is12) {
        hrs -= 12;
    }

    if (hrs <= 9) {
        res += "0" + hrs + " : ";
    } else {
        res += hrs + " : ";
    }

    if (mins <= 9) {
        res += "0" + mins + " : ";
    } else {
        res += mins + " : ";
    }

    if (sec <= 9) {
        res += "0" + sec;
    } else {
        res += sec;
    }

    if (is12) {
        res += " PM";
    } else {
        res += " AM";
    }


    document.getElementById('container').innerHTML = res;
}


let s = document.getElementById('sp');
let div = document.getElementById('items');

s.addEventListener('mouseover', change);
s.addEventListener('mouseleave', reset);



function change() {
    s.innerHTML = '<i class="fa-solid fa-toggle-on"></i>';

    div.style.opacity = "1";

    console.log('changed');
}

function reset() {
    s.innerHTML = '<i class="fa-solid fa-toggle-off"></i>';

    console.log(' reset')
    div.style.opacity = "0";
}
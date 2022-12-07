let d = document.getElementById('box');

d.addEventListener('mouseover', function () {

    d.style.left = Math.random() * 300 + "px";

    d.style.top = Math.random() * 300 + "px";
})
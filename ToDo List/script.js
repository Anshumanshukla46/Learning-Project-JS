let btn = document.getElementById('submit');
btn.addEventListener('click', addText);

let text = document.getElementById('text');

function addText() {

    if (text.value.length == 0) {
        alert('write some text');
        return;
    }

    let div = document.getElementById('div');
    div.style.fontSize = '1rem';
    div.style.border = ".7px solid black";
    div.style.borderRadius = "5px"
    div.style.marginLeft = "45px";
    div.style.paddingBottom = "10px";
    div.style.width = "510px"
    div.style.backgroundColor = "white";

    // text
    let sp = document.createElement('SPAN');
    let textOnSpan = document.createTextNode(text.value);
    sp.appendChild(textOnSpan);

    sp.style.paddingLeft = "10px";
    sp.style.marginRight = "200px";

    div.appendChild(sp);

    // button to delete the child
    let button = document.createElement('BUTTON');

    // creating text to be displayed on button
    var textOnButton = document.createTextNode("Delete");

    // appending text to button
    button.appendChild(textOnButton);

    button.style.padding = ".6rem";
    button.style.fontSize = "1rem";
    button.style.textAlign = "right";
    button.style.marginTop = "18px";
    button.style.marginLeft = "182px";
    button.style.backgroundColor = "#f12929";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "10px";

    button.style.cursor = "pointer";

    // appending button to div
    div.appendChild(button);;

    var br = document.createElement("br");
    div.appendChild(br);

    text.value = "";
}
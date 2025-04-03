let platno;
let kontext;
let obrazek;

window.onload = function () {
    platno = document.getElementById("platno")
    kontext = platno.getContext("2d");
    obrazek = document.getElementById("obrazek");
    obrazek.parentElement.removeChild(obrazek);
    kontext.drawImage(obrazek, 0, 0)
    for (let index = 0; index < 100; index++) {
        dest();
    }
}

function dest() {
    let x = Math.random() * 343;
    let y = Math.random() * 421;
    kontext.strokeStyle = "blue";
    kontext.beginPath();
    kontext.moveTo(x, 70 + y);
    kontext.lineTo(8 + x, 90 + y);
    kontext.closePath();
    kontext.stroke();
}
let platno;
let kontext;
let obrazek;

window.onload = function () {
    platno = document.getElementById("platno")
    kontext = platno.getContext("2d");
    obrazek = document.getElementById("obrazek");
    obrazek.parentElement.removeChild(obrazek);

    kontext.scale(0.5, 0.5);

    kontext.fillStyle = "red";
    kontext.fillRect(0, 0, 510, 340);
    kontext.save();

    kontext.translate(10, 10);
    kontext.drawImage(obrazek, 0, 0);
    kontext.restore();
}
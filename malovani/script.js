let platno;
let kontext;
let obrazek;

window.addEventListener('load', function() {
    platno = document.getElementById("platno");
    kontext = platno.getContext("2d");
    obrazek = document.getElementById("obrazek");
    obrazek.parentElement.removeChild(obrazek);

    kontext.drawImage(obrazek, 0, 0);
    kontext.font = "30px sans-serif";
    kontext.fillStyle = "darkblue";
    kontext.fillText("ITnetwork.cz", 50, 50);
});
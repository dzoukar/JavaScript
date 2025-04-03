let platno;
let kontext;
let obrazek;
let otoceni = 0;

let zakladniIntervalOpakovani = 1000 / 60;
let casPoslednihoOpakovani = 0;
let dobaOdPoslednihoOpakovani = 0;
let upravaRychlosti = 1;

document.addEventListener("DOMContentLoaded", function() {
    platno = document.getElementById("platno");
    kontext = platno.getContext("2d");
    obrazek = document.getElementById("kolo");
    obrazek.style.display = "none";

    // Start animace
    requestAnimationFrame(prekresli);
});

function prekresli() {
    kontext.clearRect(0, 0, 500, 500);
    kontext.save();
    kontext.translate(250, 250);
    kontext.rotate(otoceni);
    kontext.drawImage(obrazek, -obrazek.width / 2, -obrazek.height / 2);
    kontext.restore();
    otoceni += (2 * Math.PI) / 360;

    // Zavolání dalšího snímku
    requestAnimationFrame(prekresli);
}
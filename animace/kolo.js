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
    upravRychlost();

    kontext.clearRect(0, 0, platno.width, platno.height);
    kontext.save();
    kontext.translate(platno.width / 2, platno.height / 2);
    kontext.rotate(otoceni);
    kontext.drawImage(obrazek, -obrazek.width / 2, -obrazek.height / 2);
    kontext.restore();

    otoceni += ((2 * Math.PI) / 360) * upravaRychlosti;

    kontext.font = '16px Arial';
    kontext.fillStyle = 'black';
    kontext.fillText('FPS: ' + Math.round(1000 / dobaOdPoslednihoOpakovani), 10, 20);

    requestAnimationFrame(prekresli);
}

function upravRychlost() {
    if (casPoslednihoOpakovani) {
        dobaOdPoslednihoOpakovani = Date.now() - casPoslednihoOpakovani;
        upravaRychlosti = dobaOdPoslednihoOpakovani / zakladniIntervalOpakovani;
    }
    casPoslednihoOpakovani = Date.now();
}
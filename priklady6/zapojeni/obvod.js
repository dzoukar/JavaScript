let baterie = new Image();
let zarovky = [new Image(), new Image()];
let prepinace = [new Image(), new Image()];

let stavPrepinace1 = false;
let stavPrepinace2 = false;

let pocetNactenych = 0;

let platno;
let kontext;

window.onload = function () {
    platno = document.getElementById("obvod");
    kontext = platno.getContext("2d");

    // Přidání událostí pro přepínače
    document.getElementById("prepinac1").onclick = function () {
        stavPrepinace1 = !stavPrepinace1; // Přepnutí stavu
        vykresliObvod();
    };

    document.getElementById("prepinac2").onclick = function () {
        stavPrepinace2 = !stavPrepinace2; // Přepnutí stavu
        vykresliObvod();
    };
};

// Načtení obrázků
baterie.onload = zarovky[0].onload = zarovky[1].onload = prepinace[0].onload = prepinace[1].onload = function () {
    pocetNactenych++;
    if (pocetNactenych === 5) {
        vykresliObvod(); // Vykreslení obvodu po načtení všech obrázků
    }
};

// Cesty k obrázkům
baterie.src = "img/baterie.png";
zarovky[0].src = "img/zarovka0.png";
zarovky[1].src = "img/zarovka1.png";
prepinace[0].src = "img/prepinac0.png";
prepinace[1].src = "img/prepinac1.png";

// Funkce pro vykreslení obvodu
function vykresliObvod() {
    // Vyčištění plátna
    kontext.clearRect(0, 0, platno.width, platno.height);

    // Hlavní okruh
    kontext.strokeRect(50, 50, 400, 200);

    // Střední spojení
    kontext.beginPath();
    kontext.moveTo(300, 50);
    kontext.lineTo(300, 250);
    kontext.closePath();
    kontext.stroke();

    // Vykreslení baterie
    kontext.drawImage(baterie, 50 - 32 / 2, 110);

    // Přepínač 1
    kontext.drawImage(obrazekPrepinace1(), 100, 50 - 37 / 2);

    // Přepínač 2
    kontext.save();
    kontext.translate(300 + 37 / 2, 80);
    kontext.rotate(90 * Math.PI / 180);
    kontext.drawImage(obrazekPrepinace2(), 0, 0);
    kontext.restore();

    // Žárovka 1
    kontext.save();
    kontext.translate(300 + 55, 170);
    kontext.rotate(90 * Math.PI / 180);
    kontext.drawImage(obrazekZarovky1(), 0, 0);
    kontext.restore();

    // Žárovka 2
    kontext.save();
    kontext.translate(450 + 55, 130);
    kontext.rotate(90 * Math.PI / 180);
    kontext.drawImage(obrazekZarovky2(), 0, 0);
    kontext.restore();
}

// Funkce pro získání obrázku přepínače 1
function obrazekPrepinace1() {
    return stavPrepinace1 ? prepinace[1] : prepinace[0];
}

// Funkce pro získání obrázku přepínače 2
function obrazekPrepinace2() {
    return stavPrepinace2 ? prepinace[1] : prepinace[0];
}

// Funkce pro získání obrázku žárovky 1
function obrazekZarovky1() {
    return stavPrepinace1 && stavPrepinace2 ? zarovky[1] : zarovky[0];
}

// Funkce pro získání obrázku žárovky 2
function obrazekZarovky2() {
    return stavPrepinace1 ? zarovky[1] : zarovky[0];
}
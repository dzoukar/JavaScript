let tabulka;
let sloupcu = 5;
let radku = 3;
let aktivniBunka;

window.onload = function () {
    vytvorOvladaciTlacitka();
    vytvorVychoziTabulku();
}

function vytvorVychoziTabulku() {
    tabulka = document.createElement("table");
    document.body.appendChild(tabulka);

    for (let y = 0; y < radku; y++) {
        let tr = document.createElement("tr");
        tabulka.appendChild(tr);

        for (let x = 0; x < sloupcu; x++) {
            tr.appendChild(vytvorBunku());
        }
    }
}

function vytvorBunku() {
    let td = document.createElement("td");
    let tdInput = document.createElement("input");
    tdInput.type = "text";
    tdInput.onfocus = function() {
        aktivniBunka = this;
    };
    td.appendChild(tdInput);
    return td;
}

function vytvorTlacitko(popisek) {
    let btn = document.createElement("button");
    btn.textContent = popisek;
    document.body.appendChild(btn);
    return btn;
}

function vytvorOvladaciTlacitka() {
    vytvorTlacitko("Přidat řádek dolů").onclick = pridejRadekDolu;
    vytvorTlacitko("Přidat řádek nahoru").onclick = pridejRadekNahoru;
    vytvorTlacitko("Přidat sloupec vlevo").onclick = pridejSloupecDoleva;
    vytvorTlacitko("Přidat sloupec vpravo").onclick = pridejSloupecDoprava;
    vytvorTlacitko("Odstranit řádek").onclick = smazRadek;
    vytvorTlacitko("Odstranit sloupec").onclick = smazSloupec;
}

function vytvorRadek() {
    let novyRadek = document.createElement("tr");
    let pocetBunekVPrvnimRadku = tabulka.firstElementChild.querySelectorAll("td").length;

    for (let i = 0; i < pocetBunekVPrvnimRadku; i++) {
        novyRadek.appendChild(vytvorBunku());
    }
    return novyRadek;
}

function indexRadkuAktivniBunky() {
    let uzlyTabulky = tabulka.childNodes;
    let hledanyRadek = aktivniBunka.parentElement.parentElement;

    return Array.prototype.indexOf.call(uzlyTabulky, hledanyRadek);
}

function indexSloupceAktivniBunky() {
    let uzlyRadku = aktivniBunka.parentElement.parentElement.childNodes;
    let hledanaBunka = aktivniBunka.parentElement;

    return Array.prototype.indexOf.call(uzlyRadku, hledanaBunka);
}

function pridejRadekNahoru() {
    let novyRadek = vytvorRadek();
    let indexVybraneho = indexRadkuAktivniBunky();
    tabulka.insertBefore(novyRadek, tabulka.childNodes[indexVybraneho]);
}

function pridejRadekDolu() {
    let novyRadek = vytvorRadek();
    let indexVybraneho = indexRadkuAktivniBunky();
    if (tabulka.lastChild == tabulka.childNodes[indexVybraneho]) {
        tabulka.appendChild(novyRadek);
    } else {
        tabulka.insertBefore(novyRadek, tabulka.childNodes[indexVybraneho + 1])
    }
}

function pridejSloupecDoleva() {
    let indexVybraneho = indexSloupceAktivniBunky();
    for (let i = 0; i < tabulka.childNodes.length; i++) {
        let novaBunka = vytvorBunku();
        tabulka.childNodes[i].insertBefore(novaBunka, tabulka.childNodes[i].childNodes[indexVybraneho]);
    }
}

function pridejSloupecDoleva() {
    let indexVybraneho = indexSloupceAktivniBunky();
    for (let i = 0; i < tabulka.childNodes.length; i++) {
        let novaBunka = vytvorBunku();
        tabulka.childNodes[i].insertBefore(novaBunka, tabulka.childNodes[i].childNodes[indexVybraneho]);
    }
}

function pridejSloupecDoprava() {
    let indexVybraneho = indexSloupceAktivniBunky();
    for (let i = 0; i < tabulka.childNodes.length; i++) {
        let novaBunka = vytvorBunku();
        if (tabulka.childNodes[i].childNodes[indexVybraneho] == tabulka.childNodes[i].lastElementChild) {
            tabulka.childNodes[i].appendChild(novaBunka);
        } else {
            tabulka.childNodes[i].insertBefore(novaBunka, tabulka.childNodes[i].childNodes[indexVybraneho + 1]);
        }
    }
}

function smazRadek() {
    let indexVybraneho = indexRadkuAktivniBunky();
    tabulka.removeChild(tabulka.childNodes[indexVybraneho]);
}

function smazSloupec() {
    let indexVybraneho = indexSloupceAktivniBunky();
    for (let i = 0; i < tabulka.childNodes.length; i++) {
        tabulka.childNodes[i].removeChild(tabulka.childNodes[i].childNodes[indexVybraneho]);
    }
}
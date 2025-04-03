/*  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *
 *                      ___ ___ ___
 *                     | . |  _| . |  LICENCE
 *                     |  _|_| |___|
 *                     |_|
 *
 *    REKVALIFIKAČNÍ KURZY  <>  PROGRAMOVÁNÍ  <>  IT KARIÉRA
 *
 * Tento zdrojový kód je součástí profesionálních IT kurzů na
 * WWW.ITNETWORK.CZ
 *
 * Kód spadá pod licenci PRO obsahu a vznikl díky podpoře
 * našich členů. Je určen pouze pro osobní užití a nesmí být šířen.
 * Více informací na https://www.itnetwork.cz/licence
 */

document.addEventListener('DOMContentLoaded', function () {
    let tabulka = document.getElementsByTagName("table");

    for (let i = 0; i < tabulka.length; i++) {
        let bunkyZahlavi = tabulka[i].querySelectorAll("th");

        for (let j = 0; j < bunkyZahlavi.length; j++) {
            let tlacitko = document.createElement("button");
            tlacitko.innerHTML = "S";
            tlacitko.onclick = function () {
                seradSloupec(j, tlacitko, tabulka[i]);
            };
            bunkyZahlavi[j].appendChild(tlacitko);
        }
    }
});

function seradSloupec(indexSloupce, tlacitko, tabulka) {
    let telo = tabulka.querySelector("tbody");
    let radky = Array.from(telo.children);

    let vzestupne = tabulka.getAttribute('data-vzestupne') === 'true';

    radky.sort((a, b) => {
        let hodnotaA = a.children[indexSloupce].textContent.trim();
        let hodnotaB = b.children[indexSloupce].textContent.trim();

        if (!isNaN(hodnotaA) && !isNaN(hodnotaB)) {
            hodnotaA = parseInt(hodnotaA);
            hodnotaB = parseInt(hodnotaB);
        }

        if (vzestupne) {
            return hodnotaA > hodnotaB ? 1 : -1;
        } else {
            return hodnotaA < hodnotaB ? 1 : -1;
        }
    });

    // Vyprázdníme obsah tbody
    while (telo.firstChild) {
        telo.removeChild(telo.firstChild);
    }

    // Přidáme seřazené řádky
    for (let k = 0; k < radky.length; k++) {
        telo.appendChild(radky[k]);
    }

    // Změníme směr řazení pro příští kliknutí
    tabulka.setAttribute('data-vzestupne', vzestupne ? 'false' : 'true');
}

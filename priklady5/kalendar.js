window.onload = function () {
    createCalendar();
};

function createCalendar() {
    let dnes = new Date;
    let aktualniRok = dnes.getFullYear();
    let aktualniMesic = dnes.getMonth();
    let pocetDniVMesici = new Date(aktualniRok, aktualniMesic + 1, 0).getDate();
    let dnyVTydnu = ['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'];
    let kalendar = '<table border="1"><tr>';
    let prvniDenVMesici = new Date(aktualniRok, aktualniMesic, 1).getDay();

    // Oprava prvního dne v týdnu (v JavaScriptu je neděle 0, ale chceme pondělí jako první den)
    prvniDenVMesici = prvniDenVMesici === 0 ? 7 : prvniDenVMesici;

    // Hlavička s názvy dnů v týdnu
    dnyVTydnu.forEach(den => {
        kalendar += `<th>${den}</th>`;
    });
    kalendar += '</tr><tr>';

    // Vyplnění prázdných buněk před prvním dnem měsíce
    for (let i = 1; i < prvniDenVMesici; i++) {
        kalendar += '<td></td>';
    }

    // Vyplnění buněk s dny měsíce
    for (let den = 1; den <= pocetDniVMesici; den++) {
        kalendar += `<td>${den}</td>`;
        // Zalomení řádku po každé sobotě
        if ((den + prvniDenVMesici - 1) % 7 === 0) {
            kalendar += '</tr><tr>';
        }
    }

    // Uzavření posledního řádku a tabulky
    kalendar += '</tr></table>';

    // Vložení kalendáře do těla stránky
    document.body.innerHTML = kalendar;
}

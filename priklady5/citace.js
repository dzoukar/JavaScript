window.onload = function () {
    upravaFinalnihoTextu();
};

function upravaFinalnihoTextu() {
    // Výběr všech <p> elementů uvnitř funkce, aby byly dostupné po načtení stránky
    let pElement = document.querySelectorAll("p");
    for (let index = 0; index < pElement.length; index++) {
        upraveniTextu(pElement[index]);
    }
}

function upraveniTextu(pElement) {
    let spanElement = document.createElement("span");
    let hovorici = pElement.getAttribute("data-hovorici");
    let text = pElement.textContent;
    // Přidání uvozovek kolem původního textu
    pElement.innerHTML = ' "' + text + '"';
    // Přidání textu do <span> elementu
    spanElement.textContent = hovorici + " řekl: ";
    // Přidání <span> na začátek <p> elementu
    pElement.prepend(spanElement);    
}
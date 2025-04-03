window.onload = function() {
    let tlacitkoElement = document.getElementById("tlacitko");
    let cislo1Element = document.getElementById("cislo1");
    let cislo2Element = document.getElementById("cislo2");

    tlacitkoElement.addEventListener("click", function() {
        let cislo1 = parseFloat(cislo1Element.value);
        let cislo2 = parseFloat(cislo2Element.value);

        alert(cislo1 + cislo2);
    });
};
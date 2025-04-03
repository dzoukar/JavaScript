let prepinac;

window.onload = function() {
    prepinac = document.getElementById("prepinac");
    prepinac.onclick = prepni;
}

function prepni() {
    if (prepinac.getAttribute("src") == "prepinac0.png") {
        prepinac.src = "prepinac1.png";
    } else {
        prepinac.src = "prepinac0.png";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let products = document.querySelectorAll("li");
    products[4].innerHTML = "<s>Dorty</s>";
    let image = document.querySelector('[src="img/pastry.jpg"]');
image.setAttribute("alt", "Chléb");
console.log(image.hasAttribute("alt"));  // Nyní vrátí true
let firstListItem = document.querySelector("li");
firstListItem.setAttribute("class", "important");
});
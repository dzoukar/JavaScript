let text = "Hello World";
let paragraph = document.createElement("p");

window.onload = function() {
    document.body.appendChild(paragraph);
    changeText();
    setInterval(changeText, 1000);
}

function changeText() {
    if (paragraph.textContent == text) {
        paragraph.textContent == "";
    }else {
        let letterToType = text[paragraph.textContent.length];
        paragraph.textContent += letterToType;

        if (letterToType == " ") {
            changeText();
        }
    }
}
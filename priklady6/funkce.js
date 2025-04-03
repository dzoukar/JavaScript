let platno;
let kontext;
let k;
let q;

window.onload = function () {
    platno = document.getElementById("platno")
    kontext = platno.getContext("2d");
    k = document.getElementById("k");
    q = document.getElementById("q");
    document.getElementById("repaint").onclick = vykreslyMrizku();
    vykreslyMrizku();
}

function vykreslyMrizku () {
    for (let index = 0; index < 21; index++) {
        kontext.strokeStyle = "lightgrey";
        kontext.beginPath();
        kontext.moveTo(0, index * 25);
        kontext.lineTo(500, index * 25);
        kontext.closePath();
        kontext.stroke();
    }
    for (let index = 0; index < 21; index++) {
        kontext.beginPath();
        kontext.moveTo(index * 25, 0);
        kontext.lineTo(index * 25, 500);
        kontext.closePath();
        kontext.stroke();        
    }
    kontext.strokeStyle = "black";
    kontext.beginPath();
    kontext.moveTo(250, 0);
    kontext.lineTo(250, 500);
    kontext.closePath();
    kontext.stroke();
    kontext.beginPath();
    kontext.moveTo(0, 250);
    kontext.lineTo(500, 250);
    kontext.closePath();
    kontext.stroke();
    graf();
}

function graf() {
    kontext.strokeStyle = "blue";
	kontext.lineWidth = 2;
    kontext.beginPath();
	let x1 = 0 - platno.width / 50;
	let y1 = x1 * parseFloat(k.value) + parseFloat(q.value);

	let x2 = platno.width / 50;
	let y2 = x2 * parseFloat(k.value) + parseFloat(q.value);

	kontext.moveTo(0, platno.width / 2 + y1 * -25);
	kontext.lineTo(platno.width, platno.height / 2 + y2 * -25);
	kontext.closePath();
	kontext.stroke();
}
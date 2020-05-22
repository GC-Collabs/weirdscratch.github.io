function combinationof() {
	var element = event.srcElement.id;
	combo = combo.concat([' ' + element]);
	document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").innerHTML = combo.toString();
}
function createButton(element, color) {
	var button = document.createElement("button");
	button.innerHTML = element;
	button.id = element;
	button.style.backgroundColor = color;
	button.setAttribute( "onClick", "combinationof()");
	document.getElementById("elements").appendChild(button);
}
let combo = [];

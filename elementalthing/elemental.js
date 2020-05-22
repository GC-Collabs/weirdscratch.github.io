function combinationof() {
	var element = event.srcElement.id;
	combo = combo.concat([' ' + element]);
	document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").innerHTML = combo.toString();
	document.getElementById("combo").style.backgroundColor = "#44FF44";;
}
function getRGBValues(str) {
	var vals = str.substring(str.indexOf('(') +1, a.length -1).split(', ');
	return {
		'r': vals[0],
		'g': vals[1],
		'b': vals[2]
	};
}
function createButton(element, color) {
	var button = document.createElement("button");
	button.innerHTML = element;
	button.id = element;
	button.style.backgroundColor = color;
	var rgb = color.match(/\d+/g);
	if (rgb[0] + rgb[1] + rgb[2] < 383) {
		button.style.color = "#FFFFFF";
	}
	button.setAttribute( "onClick", "combinationof()");
	document.getElementById("elements").appendChild(button);
}
document.addEventListener('keyup', function (event) {
	if (event.defaultPrevented) {
		return;
	}

	var key = event.key || event.keyCode;

	if (key === 'Backspace') {
		combo.length = combo.length - 1;
		if (combo.length == 0) {
			document.getElementById("combo").innerHTML = "Click on elements to add them to the combo list.";
			document.getElementById("combo").style.width = 200;
			document.getElementById("combo").style.height = 200;
			document.getElementById("combo").style.backgroundColor = "#FF4444";
		}
		else {
			document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
			document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
			document.getElementById("combo").innerHTML = combo.toString();
			document.getElementById("combo").style.backgroundColor = "#44FF44";
		}
	}
});
let combo = [];
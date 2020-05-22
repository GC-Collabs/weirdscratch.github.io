function combinationof() {
	var elemental = event.srcElement.id;
	combo = combo.concat([' ' + elemental]);
	document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").innerHTML = combo.toString();
	document.getElementById("combo").style.backgroundColor = "#44FF44";
}
function getRGBValues(str) {
	var vals = str.substring(str.indexOf('(') +1, a.length -1).split(', ');
	return {
		'r': vals[0],
		'g': vals[1],
		'b': vals[2]
	};
}
function createButton(elementthing, color) {
	var button = document.createElement("button");
	button.innerHTML = elementthing;
	button.id = elementthing;
	button.style.backgroundColor = color;
	var rgb = color.match(/\d+/g);
	if (rgb[0] + rgb[1] + rgb[2] < 383) {
		button.style.color = "#FFFFFF";
	}
	button.setAttribute( "onClick", "combinationof()");
	document.getElementById("elements").appendChild(button);
}
function elemresult(combinations,id) {
	for (var i = 0; i < Object.values(json).length; i++) {
		if (Object.values(json)[i][id] == combinations) {
			return i;
		}
	}
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
})

let combo = [];
var json = {"Earth": [[],1,"#BB6644"], "Fire": [[],2,"#FF8844"], "Air": [[],3,"#8888FF"], "Water": [[],4,"#4444FF"], "Dust": [[1,3],5,"#888888"]}
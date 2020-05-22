function combinationof() {
	var elemental = event.srcElement.id;
	combo = combo.concat([' ' + elemental]);
	comboshow = comboshow.concat([' ' + elemresult2(elemental,1)]);
	document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").innerHTML = comboshow.toString();
	document.getElementById("combo").style.backgroundColor = "#44FF44";
}
function getRGBValues(str) {
	var vals = str.substring(str.indexOf('(') +1, a.length -1).split(', ');
	return {
		'r': vals[0],
		'g': vals[1],
		'b': vals[2]
	};
}3
function createButton(elementthing, elementthing2, color) {
	if (document.getElementById(elementthing2) == null) {
	var button = document.createElement("button");
	button.innerHTML = elementthing;
	button.id = elementthing2;
	button.style.backgroundColor = color;
	button.style.marginTop = "3px";
	button.style.marginBottom = "3px";
	button.style.marginLeft = "3px";
	button.style.marginRight = "3px";
	var rgb = color.match(/\d+/g);
	if (rgb[0] + rgb[1] + rgb[2] < 383) {
		button.style.color = "#FFFFFF";
	}
	button.setAttribute( "onClick", "combinationof()");
	document.getElementById("elements").appendChild(button);
	}
}
function elemresult(array) {
	if (elemresult2(array,0) == undefined) {
	elementnotfound();
	}
	else {
	createButton(elemresult2(array,0),elemresult3(array,0)[1], elemresult3(array,0)[2]);
	}
}
function elemresult2(combinations,id) {
	for (var i = 0; i < Object.values(json).length; i++) {
		if (Object.values(json)[i][id].toString()==combinations.toString()) {
			return Object.keys(json)[i];
		}
	}
}
function elemresult3(combinations,id) {
	for (var i = 0; i < Object.values(json).length; i++) {
		if (Object.values(json)[i][id].toString()==combinations.toString()) {
			return Object.values(json)[i];
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
		comboshow.length = comboshow.length - 1;
		if (combo.length == 0) {
			document.getElementById("combo").innerHTML = "Click on elements to add them to the combo list.";
			document.getElementById("combo").style.width = 200;
			document.getElementById("combo").style.height = 200;
			document.getElementById("combo").style.backgroundColor = "#FF4444";
		}
		else {
			document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
			document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
			document.getElementById("combo").innerHTML = comboshow.toString();
			document.getElementById("combo").style.backgroundColor = "#44FF44";
		}
	}
})

let combo = [];
let comboshow = [];
var json = {"Earth": [[1],"1","#BB6644"], "Fire": [[1],"2","#FF8844"], "Air": [[1],"3","#8888FF"], "Water": [[1],"4","#4444FF"], "Dust": [[" 1"," 3"],"5","#888888"]}
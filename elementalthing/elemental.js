function combinationof() {
	var elemental = event.srcElement.id;
	combo = combo.concat([' ' + elemental]);
	comboshow = comboshow.concat([' ' + elemresult2(elemental,1)]);
	document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
	document.getElementById("combo").innerHTML = comboshow.toString();
	document.getElementById("combo").style.backgroundColor = "#44FF44BB";
}
function getRGBValues(str) {
	var vals = str.substring(str.indexOf('(') +1, a.length -1).split(', ');
	return {
		'r': vals[0],
		'g': vals[1],
		'b': vals[2]
	};
}
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
	button.setAttribute("onClick", "combinationof()");
	document.getElementById("elements").appendChild(button);
	}
}
function createButton2(elementthing, elementthing2, color) {
	var button = document.createElement("button");
	button.innerHTML = elementthing;
	button.id = elementthing2;
	button.style.height = '50px';
	button.style.backgroundColor = color;
	button.style.marginTop = "3px";
	button.style.marginBottom = "3px";
	button.style.marginLeft = "3px";
	button.style.marginRight = "3px";
	var rgb = color.match(/\d+/g);
	if (rgb[0] + rgb[1] + rgb[2] < 383) {
		button.style.color = "#FFFFFF";
	}
	button.setAttribute("onClick", "vote()");
	document.getElementById("suggestions").appendChild(button);
}
function display(elementthing, color) {
	var button = document.createElement("button");
	button.innerHTML = elementthing;
	button.style.backgroundColor = color;
	button.style.marginTop = "3px";
	button.style.marginBottom = "3px";
	button.style.marginLeft = "3px";
	button.style.marginRight = "3px";
	var rgb = color.match(/\d+/g);
	if (rgb[0] + rgb[1] + rgb[2] < 383) {
		button.style.color = "#FFFFFF";
	}
	document.getElementById("suggestions").appendChild(button);
}
function elemresult(array) {
	if (elemresult2(array,0) == undefined) {
	elementnotfound();
	} else {
	createButton(elemresult2(array,0),elemresult3(array,0)[1], elemresult3(array,0)[2]);
	stuff = stuff.concat(elemresult3(array,0)[1]);
	localStorage.setItem('elements', stuff);
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
function elementnotfound() {
	
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
			document.getElementById("combo").style.backgroundColor = "#FF4444BB";
		}
		else {
			document.getElementById("combo").style.width = Math.pow(combo.length,0.5)*100;
			document.getElementById("combo").style.height = Math.pow(combo.length,0.5)*100;
			document.getElementById("combo").innerHTML = comboshow.toString();
			document.getElementById("combo").style.backgroundColor = "#44FF44BB";
		}
	}
})
var combo = [];
var comboshow = [];
var json = {"Earth": [[1],"1","rgb(224,96,64)"], "Fire": [[1],"2","rgb(255,128,64)"], "Air": [[1],"3","rgb(128,128,255)"], "Water": [[1],"4","rgb(64,64,255)"], "Dust": [[" 1"," 3"],"5","rgb(128,128,128)"]};
var suggestions = {"Elements": [[" 1", " 2", " 3", " 4"],"rgb(255,255,64)",10,10], "Elementses": [[" 1", " 2"],"rgb(255,255,64)",10,10]};
if (localStorage.getItem('elements') == "null") {
	var stuff = new Array("");
	localStorage.setItem('elements', stuff);
} else {
	var stuff = localStorage.getItem('elements').split(',');
}
for (i = 0; i < stuff.length; i++) { 
	var thetype = typeof stuff[i]
	if (thetype == "string" && !(stuff[i] == "")) {
		createButton(elemresult2(stuff[i],1),stuff[i], elemresult3(stuff[i],1)[2]);
	}
}
for (i = 0; i < Object.values(suggestions).length; i++) {
	var count = Object.values(suggestions)[i][0];
	document.getElementById("suggestions").innerHTML = document.getElementById("suggestions").innerHTML.concat('+(');
	for (j = 0; j < count.length; j++) {
		var tonumber = parseInt(count[j]).toString();
		var elems = elemresult2(tonumber,1);
		var elemcolors = elemresult3(tonumber,1)[2];
		display(elems,elemcolors);
		if (!(j == count.length - 1)) {
			document.getElementById("suggestions").innerHTML = document.getElementById("suggestions").innerHTML.concat(',');
		};
	};
	document.getElementById("suggestions").innerHTML = document.getElementById("suggestions").innerHTML.concat(')=');
	var elemresult = Object.keys(suggestions)[i];
	var elemresultcolor = Object.values(suggestions)[i][1];
	display(elemresult,elemresultcolor);
	likes = 'Likes:' + Object.values(suggestions)[i][2];
	dislikes = 'Dislikes:' + Object.values(suggestions)[i][3];
	createButton2(likes,"like","#44FF44");
	createButton2(dislikes,"dislike","#FF4444");
	document.getElementById("suggestions").innerHTML = document.getElementById("suggestions").innerHTML.concat('<br/>');
}
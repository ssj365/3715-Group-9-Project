window.onload = init;
function init() {
	
	var button = document.getElementById("EventButton");
	
	var editbutton1 = document.getElementById("SButton");
	var editbutton2 = document.getElementById("GButton");
	var editbutton3 = document.getElementById("MButton");
	
	button.onclick = handleButtonClick;
	
	SButton.onclick = SJC;
	GButton.onclick = Grenfell;
	MButton.onclick = Marine;
}

function handleButtonClick(e){
	var textInput = document.getElementById("EventInput");
	var CalEvent = textInput.value;
		if(CalEvent==""){
			alert("Please Enter Event");
		}
		else{
		var li = document.createElement("li");
		li.innerHTML = CalEvent;
		var ul = document.getElementById("cal");
		ul.appendChild(li);
	
		}
}

function SJC(e){
	var currenttext = document.getElementById("ST");
	var CurrTXT = currenttext.value;

	document.getElementById("Stxt").innerHTML = CurrTXT;
}

function Grenfell(e){
	var currenttext = document.getElementById("GT");
	var CurrTXT = currenttext.value;

	document.getElementById("Gtxt").innerHTML = CurrTXT;
	
}

function Marine(e){
	var currenttext = document.getElementById("MT");
	var CurrTXT = currenttext.value;

	document.getElementById("Mtxt").innerHTML = CurrTXT;
}

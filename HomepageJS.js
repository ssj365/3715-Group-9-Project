window.onload = init;
function init() {
	 
	checkEdits1();
	checkEdits2();
	checkMarine();


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
		localStorage.setItem("cal", ul);
	
		}
}



function SJC(e){
	var input = document.getElementById("ST").value;	
 	localStorage.setItem("Stxt", input);

	document.getElementById("Stxt").innerHTML = input;
	
}


function checkEdits1() {

//find out if the user has previously saved edits
if(localStorage.getItem("Stxt")!=null)
document.getElementById("Stxt").innerHTML = localStorage.getItem("Stxt");
document.getElementById("ST").innerHTML = localStorage.getItem("ST");

}

function Grenfell(e){
	var input = document.getElementById("GT").value;	
 	localStorage.setItem("Gtxt", input);

	document.getElementById("Gtxt").innerHTML = input;
	
}
function checkEdits2() {

//find out if the user has previously saved edits
if(localStorage.getItem("Gtxt")!=null)
document.getElementById("Gtxt").innerHTML = localStorage.getItem("Gtxt");
document.getElementById("GT").innerHTML = localStorage.getItem("GT");

}


function Marine(e){
	var input = document.getElementById("MT").value;	
 	localStorage.setItem("Mxt", input);

	document.getElementById("Mtxt").innerHTML = input;
	
}

function checkMarine() {

//find out if the user has previously saved edits
(localStorage.getItem("Mtxt")!=null)
document.getElementById("Mtxt").innerHTML = localStorage.getItem("Mtxt");
document.getElementById("MT").innerHTML = localStorage.getItem("MT");

}


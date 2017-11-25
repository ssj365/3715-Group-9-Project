window.onload = init;
function init() {
	var button = document.getElementById("RegButton");
	button.onclick = handleButtonClick;
	
	var addClass = document.getElementById("submitButton");
	addClass.onclick= createCourse;
	
	var coursesArray = getCoursesArray();
	var enrolledCourses = getEnrolledCourses();
	fillTable(coursesArray);
	fillEnrolled(enrolledCourses);
}

function getCoursesArray(){
	var coursesArray = localStorage.getItem("coursesArray");
	if (!coursesArray || coursesArray == null || (coursesArray == "[]")) {
		createInitCourses();
		coursesArray = localStorage.getItem("coursesArray");
		coursesArray = JSON.parse(coursesArray);
	} else {
		coursesArray = JSON.parse(coursesArray);
	} 
	return coursesArray;
}

function getDeletedCourses(){
	var deletedCourses = localStorage.getItem("deletedCourses");
	if (!deletedCourses) {
		deletedCourses = [];
		localStorage.setItem("deletedCourses", JSON.stringify(deletedCourses));
	} else {
		deletedCourses = JSON.parse(deletedCourses);
	} 
	return deletedCourses;
}

function getEnrolledCourses(){
	var enrolledCourses = localStorage.getItem("enrolledCourses");
	if (!enrolledCourses) {
		enrolledCourses = [];
		localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
	} else {
		enrolledCourses = JSON.parse(enrolledCourses);
	} 
	return enrolledCourses;
}

function createInitCourses() {
		var c1 = {name: "Web Programming", number: "Comp 9999", room: "EN-5723"};
		var c2 = {name:"Artificial Intelligence", number: "Comp 1110",room: "EN-9432"};
		var c3 = {name:"Database Systems",number: "Comp 1710",room: "EN-3290"};
		var c4 = {name:"Object-Oriented Programming",number: "Comp 2710",room:"EN-3710"};
		var c5 = {name:"Introduction to Bioinformatics",number: "Comp 2234",room: "EN-4099"};
		var tempCourses = [c1,c2,c3,c4,c5];
		coursesArray=[];
		for(i=0; i < tempCourses.length; i++){
			var name = tempCourses[i].name;
			var number =tempCourses[i].number;
			var room = tempCourses[i].room;
			
			// create a class using JSON to hold name, number and room
			var currentDate = new Date();
			var key = name + currentDate.getTime()+i;
			var courseObj = {
				"name":		name,
				"number":	number,
				"room": 	room
			};
			localStorage.setItem(key, JSON.stringify(courseObj));
			// add new course key to array and update courses array in localStorage
			coursesArray.push(key);
		}
	localStorage.setItem("coursesArray", JSON.stringify(coursesArray));
}

function createCourse() {
	var coursesArray = getCoursesArray();
	var name = document.getElementById("nameText").value;
	var number = document.getElementById("numberText").value;
	var room = document.getElementById("roomText").value;
	

	// create a class using JSON to hold name, number and room
	var currentDate = new Date();
	var key = name + currentDate.getTime();
	var courseObj = {
			"name":		name,
			"number":	number,
			"room": 	room
	};
	localStorage.setItem(key, JSON.stringify(courseObj));

	// add new course key to array and update courses array in localStorage
	coursesArray.push(key);
	localStorage.setItem("coursesArray", JSON.stringify(coursesArray));
	fillTable(coursesArray);
}

function fillTable(array){
		var coursesArray = array;
		coursesArray.sort(function(a,b){
			var nameA = a.toUpperCase();
			var nameB = b.toUpperCase();
			if(nameA<nameB){
				return -1;
			}
			if(nameA > nameB){
				return 1 ;
			}
			return 0
		});
		
		
		for(var i=0; i< coursesArray.length; i++){
		var key = coursesArray[i];
		var courseObj = JSON.parse(localStorage[key]);
		
	
		var name = courseObj.name;
		var number = courseObj.number;
		var room = courseObj.room;
		var button = document.createElement("BUTTON");
		var t = document.createTextNode("Delete");
		button.appendChild(t);
		var currentDate = new Date();
		var id = name+currentDate.getTime();
		button.id = id;
		
		var table = document.getElementById("courses");
		// insert new row
		var row = table.insertRow(-1);
		row.setAttribute("id", key)
		//create cells
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		// add text too new cells
		
		cell1.innerHTML = name;
	    cell2.innerHTML = number;
		cell3.innerHTML = room;
		cell4.appendChild(button);
		
		button.onclick = deleteCourse;
		}
}
function deleteCourse(e) {
	var buttonId = e.target.id;
	var button = document.getElementById(buttonId);
	//var row = button
	var parent = button.parentNode;
	var grandparent = parent.parentNode;
	var key = button.parentNode.parentNode.id;	
	var coursesArray = getCoursesArray();
	var deletedCourses = getDeletedCourses();
	
	if (coursesArray) {
		for (var i = 0; i < coursesArray.length; i++) {
			if (key == coursesArray[i]) {
				coursesArray.splice(i,1);
			}
		}
		var row = document.getElementById(key);
		var courseObj = JSON.parse(localStorage[key]);
		var date = new Date();
		courseObj.dateDeleted = date;
		deletedCourses.push(key);
		localStorage.removeItem(key);
		localStorage.setItem(key, JSON.stringify(courseObj));
		localStorage.setItem("deletedCourses", JSON.stringify(deletedCourses));
		localStorage.setItem("coursesArray", JSON.stringify(coursesArray));
		refreshTable(coursesArray);
	}
}

function refreshTable(coursesArray){
	var table = document.getElementById("courses");
	for(var i = 1; i< table.rows.length;){
		table.deleteRow(i);
	}
	fillTable(coursesArray);
}


function fillEnrolled(array){
		var enrolledCourses = array;
		
		var table = document.getElementById("Registered");
			for(var i = 1; i< table.rows.length;){
				table.deleteRow(i);
			}
			
		
		for(var i=0; i< enrolledCourses.length; i++){
		var key = enrolledCourses[i];
		var courseObj = JSON.parse(localStorage[key]);

		var number = courseObj.number;
		var section = courseObj.section;
		
		// insert new row
		var row = table.insertRow(-1);
		row.setAttribute("id", key)
		//create cells
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		// add text too new cells
	    cell0.innerHTML = number;
		cell1.innerHTML = section;
		}
}

function handleButtonClick(){
	var enrolledCourses = getEnrolledCourses();
	var CNSelected = document.getElementById("CN").value;
	var SecSelected = document.getElementById("Sect").value;
	var date = new Date();
	var key = CNSelected+date.getTime();
	
	if(CNSelected =="Course Number" || SecSelected == "Section"){
		alert("Please Select Course Number and Section");
	}
	else{	var courseObj = {
			"number":	CNSelected,
			"section": 	SecSelected
		};
		
		localStorage.setItem(key, JSON.stringify(courseObj));

		enrolledCourses.push(key);
		localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
		fillEnrolled(enrolledCourses);
	    
		
	}
	
		
}

window.onload = init; 
function init() {
	var button = document.getElementById("RegButton");
	button.onclick = handleButtonClick;
	
	var enrolledCourses = getEnrolledCourses();
	fillEnrolled(enrolledCourses);
	
	checkLogIn()
}


function checkLogIn(){
	var sNumber = prompt("Enter student number (use sample 201222437)");
	var pWord = prompt("Enter Password (use sample 12345)");

	if(sNumber == "201222437" && pWord== "12345"){
			 
	}
	else if(sNumber == "201222417" && pWord== "12345"){
			 
	}else if(sNumber == "201222437" && pWord== "12345"){
			 
	}else if(sNumber == "201222637" && pWord== "12345"){
			 
	}else if(sNumber == "201422437" && pWord== "12345"){
			 
	}else if(sNumber == "201122437" && pWord== "12345"){
			 
	}else if(sNumber == "201222344" && pWord== "12345"){
		 
	}else if(sNumber == "201532437" && pWord== "12345"){
			 
	}else if(sNumber == "201310437" && pWord== "12345"){
			 
	}
	else if(sNumber == "2017652437" && pWord== "12345"){
		
	}
	else{
		alert("invalid login");	
		window.location.href="student.html";
	}
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

	
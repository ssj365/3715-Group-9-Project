window.onload = init;
function init() {
	var deletedCourses = getDeletedCourses();
	fillTable(deletedCourses);
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


function fillTable(array){
		deletedCourses = array;

		for(var i=0; i< deletedCourses.length; i++){
		var key = deletedCourses[i];
		var courseObj = JSON.parse(localStorage[key]);
		
	
		var name = courseObj.name;
		var number = courseObj.number;
		var room = courseObj.room;
		var date = courseObj.dateDeleted;
	
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
		cell4.innerHTML = date;
		

		}
}
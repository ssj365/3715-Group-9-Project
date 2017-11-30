/**
 * http://usejsdoc.org/
 */


function checkLogIn(){
	var sNumber=document.getElementById("Student Number").value;
	var pWord= document.getElementById("password").value;
	if(sNumber == "201222437" && pWord== "12345"){
			window.location.href="Students.html";
	}
	else if(sNumber == "201222417" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201222437" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201222637" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201422437" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201122437" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201222344" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201532437" && pWord== "12345"){
			window.location.href="Students.html";
	}else if(sNumber == "201310437" && pWord== "12345"){
			window.location.href="Students.html";
	}
	else if(sNumber == "2017652437" && pWord== "12345"){
			window.location.href="Students.html";
	}
	else{
		alert("invalid username");
	}
}


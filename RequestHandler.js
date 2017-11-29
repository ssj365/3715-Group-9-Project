function start(response, request){
	console.log("Request handler 'start' was called." );
	
	fs.readFile('Homepage.html', function(err, html){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write(html);
		if(request.url == 'campusDirection.html'){
			campusDirection(response, request);
		}
		else if(request.url == 'CourseC.html'){
			CourseC(response, request);
		}
		else if(request.url == 'grenfell.html'){
			grenfell(response, request);
		}
		else if(request.url == 'Homepage.html'){
			Homepage(response, request);
		}
		else if(request.url == 'PreviousCourses.html'){
			PreviousCourses(response, request);
		}
		else if(request.url == 'SJC.html'){
			SJC(response, request);
		}
		else if(request.url == 'student.html'){
			student(response, request);
		}
		else if(request.url == 'GRENFELL.jpg'){
			GRENFELL(response, request);
		}
		else if(request.url == 'HOMEPAGE.jpg'){
			HOMEPAGE(response, request);
		}
		else if(request.url == 'MI.jpg'){
			MI(response, request);
		}
	response.end();
	});
	
	function main(response, request){
		console.log("Request handler 'main' was called.");
		fs.readFile('Homepage.html', function(err,html){
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(html);
		}
	}
	
	function campusDirection(response,request){
		console.log("Request handler 'main'was called.");
		fs.readFile('campusDirection.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			 
			response.end();
		});
	}
	
	function CourseC(response,request){
		console.log("Request handler 'CourseC' was called.");
		fs.readFile('CourseC.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			 
			response.end();
		});
	}
	
	function grenfell(response,request){ 
		console.log("Request handler 'grenfell' was called.");
		fs.readFile('grenfell.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			 
			response.end();
		});
	}
	
	function Homepage(response,request){
		console.log("Request handler 'Homepage' was called.");
		fs.readFile('Homepage.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			 
			response.end();
		});
	}
	
	function PreviousCourses(response,request){
		console.log("Request handler 'PreviousCourses' was called.");
		fs.readFile('PreviousCourses.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			 
			response.end();
		});
	}
	
		function SJC(response,request){
		console.log("Request handler 'SJC' was called.");
		fs.readFile('SJC.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
	
			response.end();
		});
	}
	
		function student(response,request){
		console.log("Request handler 'student' was called.");
		fs.readFile('student.html', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			
			response.end();
		});
	}
	
		function GRENFELL(response,request){
		console.log("Request handler 'GRENFELL' was called.");
		fs.readFile('GRENFELL.jpg', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			
			response.end();
		});
	}
	
		function MI(response,request){
		console.log("Request handler 'MI' was called.");
		fs.readFile('MI.jpg', function(err,html){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(html);
			
			response.end();
		});
	}
	
	
	
}
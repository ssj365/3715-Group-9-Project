var express=require("express"),
	app =express(),
	http= require("http").Server(app).listen(3339)
	
app.use("/", express.static("."))
app.use("/", express.static("."))
app.use("/", express.static("."))

console.log("Server started at port 3339")
app.get("/",function(req,res){
	res.sendFile(__dirname +"/Homepage.html");
})

const options = {
	url: 'http://sc-9.cs.mun.ca',
method : 'GET',
headers: {
	'Accept': 'application/json',
	'Accept-Charset':'UTF-8',
	}
};
app.get("/api", function(req, res)  { 
  request(options, function(err, response, body) {  
    var json = JSON.parse(body);
    console.log(json); // Logging the output within the request function
    res.json(request.json) //then returning the response.. The request.json is empty over here
  }); //closing the request function      
});

var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {}
handle["/"] = requestHandler.start;
handle["start"] = requestHandler.start;
handle["/campusDirection.html"] = requestHandler.campusDirection;
handle["/CourseC.html"] = requestHandler.CourseC;
handle["/grenfell.html"] = requestHandler.grenfell;
handle["/Homepage.html"] = requestHandler.Homepage;
handle["/mapcss.css"] = requestHandler.mapcss;
handle["/PreviousCourses.html"] = requestHandler.PreviousCourses;
handle["/SJC.html"] = requestHandler.SJC;
handle["/student.html"] = requestHandler.student;
handle["/stylesheet.css"] = requestHandler.stylesheet;
handle["/stylesheet2.css"] = requestHandler.stylesheet2;
handle["/stylesheetmobi.css"] = requestHandler.stylesheetmobi;

handle["/images/CatFill.jpg"] = requestHandler.CatFill;
handle["/images/catheadfill.jpg"] = requestHandler.catheadfill;
handle["/images/EventFill.jpg"] = requestHandler.EventFill;
handle["/images/GRENFELL.jpg"] = requestHandler.GRENFELL;
handle["/images/HOMEPAGE.jpg"] = requestHandler.HP;
handle["/images/MI.jpg"] = requestHandler.MI;
handle["/images/SJCampus.jpg"] = requestHandler.SJCampus;
handle["/images/StudentBanner.jpg"] = requestHandler.StudentBanner;
handle["/images/WallpaperDesktop.jpg"] = requestHandler.WallpaperDesktop;
server.start(router.route, handle);
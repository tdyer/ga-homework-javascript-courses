// Application namespace
var CourseApp = {

};

// =========== STUDENT ==============
CourseApp.Student = function(name) {
	this.name = name;
};

// This will give all the students access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Student.prototype.generate_html = function(){
	student_html = document.getElementById('students').innerHTML;
	student_html += "<span class='student-name'>" + this.name + "</span></br>";
	document.getElementById('students').innerHTML = student_html;
};

var matt = new CourseApp.Student("Matt Clement");
matt.generate_html();

var emma = new CourseApp.Student("Emma Thompson");
emma.generate_html();

var mike = new CourseApp.Student("Mike Fitzgerald");
mike.generate_html();

var amal = new CourseApp.Student("Amal Hussein");
amal.generate_html();

// ===========  TEACHER ==============
CourseApp.Teacher = function(name) {
	this.name = name;
}
// This will give all the teachers access to a method .generate_html
// which you can use to render each teacher to the page indvidiually
CourseApp.Teacher.prototype.generate_html = function(){
	teacher_html = document.getElementById('teachers').innerHTML;
	teacher_html += "<span class='teacher-name'>" + this.name + "</span></br>";
	document.getElementById('teachers').innerHTML = teacher_html;
};

// =========== COURSE ==============
CourseApp.Course = function(name) {
	this.name = name;
}

// This will give all the courses access to a method .generate_html
// which you can use to render each course to the page indvidiually
CourseApp.Course.prototype.generate_html = function(){
	course_html = document.getElementById('courses').innerHTML;
	course_html += "<span class='course-name'>" + this.name + "</span></br>";
	document.getElementById('courses').innerHTML = course_html;
};





// ///////////////////////////////////////////////////////////
// //                                                       //
// //            BONUS STAGE BELOW                          //
// //                                                       //
// ///////////////////////////////////////////////////////////


// // The following 3 methods will run ONLY when you click the 
// // 'Add Foo' button in the HTML. Ignore what the 'e' is in each
// // of the methods

// // For example, if I click the 'Add Teacher' button on the page
// // the 'CourseApp.add_teacher' method will run

// CourseApp.add_teacher = function(e){
//   // Prompt the user for information to add a teacher
//   // Append this teacher to the list of teachers on the page
// }

// CourseApp.add_course = function(e){
//   // Prompt the user for information to add a course
//   // Append this course to the list of courses on the page
// }

// CourseApp.add_student = function(e){
//   // Prompt the user for information to add a student
//   // Append this student to the list of students on the page
// }
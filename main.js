var CourseApp = {};

// =========== Student ==============
CourseApp.Student = function(name) {
	this.name = name;
};

CourseApp.Student.prototype.generate_html = function() {
    return "<li class='student'><h4>" + this.name + "</h4></li>";
};


// =========== Teacher ==============
CourseApp.Teacher = function(name) {
	this.name = name;
};

CourseApp.Teacher.prototype.generate_html = function(){
    return "<div id='teacher'>Teacher: " + this.name + "</div>";
};


// =========== Course ==============
CourseApp.Course = function(name) {
    this.name = name;
    this.teacher = [];
    this.students = [];
};

CourseApp.Course.prototype.add_teacher = function(teacher){ 
	this.teacher.push(teacher);
};

CourseApp.Course.prototype.add_student = function(student){ 
	this.students.push(student);
};


// This will generate *all* of the html for a specific course
CourseApp.Course.prototype.generate_html = function(){ 
	var courseHTML = document.getElementById('courses').innerHTML;
	var i = 0;
	var studentsHTML = "";
	var teacherHTML = "";
	var max = this.students.length;
// check to see if there are students and return html 
	if (this.students.length > 0) {
		for(; i < max;) {
			var student = this.students[i];
			studentsHTML += student.generate_html();
			i += 1;
		}
	} else {
		studentsHTML = "No students enrolled";
	};

// check to see if there is a teacher and return html
	if (this.teacher.length === 1) {
		teacherHTML = this.teacher[0].generate_html();
	} else {
		teacherHTML = "No teacher designated";
	};
	
	courseHTML += "<div id='" + this.name + "'>Course: " + this.name + "<br/>" + teacherHTML + "<br/><div id='students'>Students:<br/><ul>" + studentsHTML + "</ul></div>";

	document.getElementById('courses').innerHTML = courseHTML;
};


// // Create a course
course1 = new CourseApp.Course("English 101");

// // Create a teacher and add it to the above course.
susan = new CourseApp.Teacher("Susan Ruddock");
course1.add_teacher(susan);

// // Create a couple of students and add it to the above course.
blake = new CourseApp.Student("Blake Ruddock");
erin = new CourseApp.Student("Erin Ruddock");
jenna = new CourseApp.Student("Jenna Ruddock");
course1.add_student(blake);
course1.add_student(erin);
course1.add_student(jenna);

// // Generate the HTML for this course
course1.generate_html();


// CourseApp.course_names = ['psych', 'algebra'];

CourseApp.add_course = function(){
	var name = prompt("What's the name of the course?");
	var course = new CourseApp.Course(name);
	course.generate_html();
};

// CourseApp.student_names = ['bob', 'alice', 'tom', 'mike', 'joe', 'frank', 'ed'];
// CourseApp.add_student = function(e){
//   // Add a student, can get the names from student_names above!
// }
var CourseApp = {};

// =========== Student ==============
CourseApp.Student = function(name) {
	this.name = name;
};

CourseApp.Student.prototype.generate_html = function(){
    return "<li id='" + this.name + "' class='student'><h4>" + this.name + "</h4></li>";
};


// =========== Teacher ==============
CourseApp.Teacher = function(name) {
	this.name = name;
};

CourseApp.Teacher.prototype.generate_html = function(){
    return "<div id='teacher'>Teacher: " + this.name + "</div>";
};

// // =========== Course ==============
// CourseApp.Course = function(name) {
//                  // a course object properties
// }

// // This will generate *all* of the html for a specific course
// CourseApp.Course.prototype.generate_html = function(){ 
// }

// CourseApp.Course.prototype.add_teacher = function(teacher){ 
// }

// CourseApp.Course.prototype.add_student = function(student){ 
// }


// // Create a course

// // Create a teacher and add it to the above course.

// // Create a couple of students and add it to the above course.

// // Generate the HTML for this course

// CourseApp.course_names = ['psych', 'algebra'];
// CourseApp.add_course = function(e){
//   // Add a course,can get the names from course_names above!
// }

// CourseApp.student_names = ['bob', 'alice', 'tom', 'mike', 'joe', 'frank', 'ed'];
// CourseApp.add_student = function(e){
//   // Add a student, can get the names from student_names above!
// }
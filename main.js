// Application namespace
var CourseApp = {};

// =========== Student ==============
CourseApp.Student = function(name) {
  this.name = name;
};
CourseApp.Student.prototype.generate_html = function(){
  return "<li>" + this.name + "</li>";
};


// =========== Teacher ==============
CourseApp.Teacher = function(name) {
  this.name = name;
}
CourseApp.Teacher.prototype.generate_html = function(){
	return "<li>" + this.name + "</li>";
};

// =========== Course ==============
CourseApp.Course = function(name) {
  this.name = name;
  this.students = [];
}

// This will generate *all* of the html for a specific course
CourseApp.Course.prototype.generate_html = function(){
	return "<h1> Course: " + this.name + ", teacher: " + this.teacher.name + "</h1><ul class='" + this.name + " student-list'></ul>";
	var students-list = document.getElementsByClassName(this.name 'student-list')[0];
	x = 0,
	max = this.students.length;
	for (; x < max; ){
    student-list.innerHTML += "<li>" + this.students[x].name + "</li>"
	};
};
CourseApp.Course.prototype.add_teacher = function(teacher){
	var name = prompt("Teacher name");
	this.teacher = new Teacher(name);
};
CourseApp.Course.prototype.add_student = function(student){
  var name = prompt("Student name");
  var new_student = new Student(name);
  this.students.push(new_student);
}


// Create a course

// Create a teacher and add it to the above course.

// Create a couple of students and add it to the above course.

// Generate the HTML for this course

CourseApp.course_names = ['psych', 'algebra', 'french lit', 'geometry', 'world history'];
CourseApp.add_course = function(e){
  // Add a course,can get the names from course_names above!
  e = 0,
  max = CourseApp.course_names.length;
  for (; e < max ; ) {
  	var new_course = new Course(course_names[e]);
  	e += 1;
  }
}

CourseApp.student_names = ['bob', 'alice', 'tom', 'mike', 'joe', 'frank', 'ed'];
CourseApp.add_student = function(e){
  // Add a student, can get the names from student_names above!
}
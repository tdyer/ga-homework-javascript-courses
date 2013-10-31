// Application namespace
var CourseApp = {};

// =========== Student ==============
CourseApp.Student = function(name) {
                 // a student object properties
  this.name = name;
};

p1 = new CourseApp.Student('Mike');
p2 = new CourseApp.Student('Amal');
p3 = new CourseApp.Student('Emma');
p4 = new CourseApp.Student('Matt');
var students = [p1, p2, p3, p4];

CourseApp.Student.prototype.generate_html = function(students){
    var studentsHTML = document.getElementById('students').innerHTML;
    var max = students.length,
    i = 0;

    for(; i < max;) {
      studentsHTML += "<li class='student'>" + students[i].name + "</li>";
      i = i + 1;
    }
    document.getElementById('students').innerHTML = studentsHTML;
};

CourseApp.Student.prototype.generate_html(students);

// =========== Teacher ==============
CourseApp.Teacher = function(name) {
                 // a teacher object properties
                 this.name = name;
};

t1 = new CourseApp.Teacher('David');
t2 = new CourseApp.Teacher('Tom');
t3 = new CourseApp.Teacher('Teddy');
var teachers = [t1, t2, t3];

CourseApp.Teacher.prototype.generate_html = function(teachers){
   var teachersHTML = document.getElementById('teachers').innerHTML;
   var max = teachers.length,
   i = 0;

   for(; i < max;) {
      teachersHTML += "<li class='teachers'>" + teachers[i].name + "</li>";
      i = i + 1; 
   }
   document.getElementById('teachers').innerHTML = teachersHTML;
};

CourseApp.Teacher.prototype.generate_html(teachers);

// // =========== Course ==============
CourseApp.Course = function(name) {
                 // a course object properties
  this.name = name;
};

c1 = new CourseApp.Course('Front End');
c2 = new CourseApp.Course('WDI');
c3 = new CourseApp.Course('UX/UI');
var courses = [c1,c2,c3];

CourseApp.Course.prototype.generate_html = function(courses){
    var coursesHTML = document.getElementById('courses').innerHTML;
    var max = courses.length,
    i = 0;

    for(; i < max;) {
      coursesHTML += "<li class='courses'>" + courses[i].name + "</li>";
      i = i + 1;
    }
    document.getElementById('courses').innerHTML = coursesHTML;
}

CourseApp.Course.prototype.generate_html(courses);

/////// BONUS ////////

// This will generate *all* of the html for a specific course

// CourseApp.Course.prototype.add_teacher = function(teacher){ ...}
// CourseApp.Course.prototype.add_student = function(student){ ...}
// CourseApp.add_course = function(e){
//   // Prompt the user for information to add a course
//   // Append this course to the list of courses on the page
// }



// Create a course

// Create a teacher and add it to the above course.

// Create a couple of students and add it to the above course.

// Generate the HTML for this course
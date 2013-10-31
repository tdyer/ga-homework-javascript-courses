// Application namespace
var CourseApp = {};
var students = [];
// =========== Student ==============
CourseApp.Student = function(name) {
                 // a student object properties
  this.name = name;
  students.push(this);
};

p1 = new CourseApp.Student('Mike');
p2 = new CourseApp.Student('Amal');
p3 = new CourseApp.Student('Emma');
p4 = new CourseApp.Student('Matt');

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

var teachers = [];
// =========== Teacher ==============
CourseApp.Teacher = function(name) {
                 // a teacher object properties
                 this.name = name;
                 teachers.push(this);
};

t1 = new CourseApp.Teacher('David');
t2 = new CourseApp.Teacher('Tom');
t3 = new CourseApp.Teacher('Teddy');


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


// // =========== Course ==============
var courses = [];
CourseApp.Course = function(name) {
                 // a course object properties
  this.name = name;
  courses.push(this);
};

c1 = new CourseApp.Course('Front End');
c2 = new CourseApp.Course('WDI');
c3 = new CourseApp.Course('UX/UI');


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

///////////////////////////////////////////////////////////
//                                                       //
//            BONUS STAGE BELOW                          //
//                                                       //
///////////////////////////////////////////////////////////


// The following 3 methods will run ONLY when you click the 
// 'Add Foo' button in the HTML. Ignore what the 'e' is in each
// of the methods

// For example, if I click the 'Add Teacher' button on the page
// the 'CourseApp.add_teacher' method will run

CourseApp.add_teacher = function(e){
  var name = prompt("What's the teacher's name?")
  new_teacher = new CourseApp.Teacher(name);
}

CourseApp.add_course = function(e){
  var name = prompt("What's the course name?")
  new_course = new CourseApp.Course(name);
}

CourseApp.add_student = function(e){
  var name = prompt("What's the student's name?")
  new_student = new CourseApp.Student(name);
}

CourseApp.add_teacher();
CourseApp.Teacher.prototype.generate_html(teachers);
CourseApp.add_course();
CourseApp.Course.prototype.generate_html(courses);
CourseApp.add_student();
CourseApp.Student.prototype.generate_html(students);




// Create a course

// Create a teacher and add it to the above course.

// Create a couple of students and add it to the above course.

// Generate the HTML for this course
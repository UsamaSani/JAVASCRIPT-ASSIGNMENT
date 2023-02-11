
   var courses = [];


   var course1 = prompt("Enter the name of course 1:", "computer");
   var course2 = prompt("Enter the name of course 2:", "math");
   var course3 = prompt("Enter the name of course 3:", "history");
   var course4 = prompt("Enter the name of course 4:", "english");
   var course5 = prompt("Enter the name of course 5:", "physics");


   courses.push(course1);
   courses.push(course2);
   courses.push(course3);
   courses.push(course4);
   courses.push(course5);


   alert(courses);


   var course1Value = prompt(course1, course1);
   var course2Value = prompt(course2, course2);
   var course3Value = prompt(course3, course3);
   var course4Value = prompt(course4, course4);
   var course5Value = prompt(course5, course5);

   var course1ValueEdit = prompt(course1, course1Value);
   courses.splice(0, 1, course1ValueEdit);
   var course2ValueEdit = prompt(course2, course2Value);
   courses.splice(1, 1, course2ValueEdit);
   var course3ValueEdit = prompt(course3, course3Value);
   courses.splice(2, 1, course3ValueEdit);
   var course4ValueEdit = prompt(course4, course4Value);
   courses.splice(3, 1, course4ValueEdit);
   var course5ValueEdit = prompt(course5, course5Value);
   courses.splice(4, 1, course5ValueEdit);


   alert(courses);

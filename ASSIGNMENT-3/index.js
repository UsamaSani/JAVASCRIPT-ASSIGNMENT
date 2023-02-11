   var courses = [];


   for (var i = 0; i < 5; i++) {
      var courseName = prompt("Enter the name of course " + (i + 1) + ":");
      courses.push(courseName);
   }


   alert(courses);


   for (var i = 0; i < courses.length; i++) {
      var courseValue = prompt(courses[i], courses[i]);
      courses.splice(i, 1, courseValue);
   }


   alert(courses);

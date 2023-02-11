function calculatePercentage() {
    var course1 = document.getElementById("course1").value;
    var course2 = document.getElementById("course2").value;
    var course3 = document.getElementById("course3").value;
    var course4 = document.getElementById("course4").value;
    var course5 = document.getElementById("course5").value;
    var totalMarks = 500;
    var obtainedMarks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5);
    var percentage = (obtainedMarks * 100) / totalMarks;
  
    switch (true) {
      case (percentage >= 90):
        var grade = "A+";
        break;
      case (percentage >= 75):
        var grade = "A";
        break;
      case (percentage >= 60):
        var grade = "B";
        break;
      case (percentage >= 45):
        var grade = "C";
        break;
      case (percentage >= 30):
        var grade = "D";
        break;
      default:
        var grade = "F";
        break;
    }
  
    alert("Percentage: " + percentage + "%\nGrade: " + grade);
  }
  
var name = prompt("Please enter your name");
var dobDay = prompt("Please enter your date of birth (day)");
var dobMonth = prompt("Please enter your date of birth (month)");
var dobYear = prompt("Please enter your date of birth (year)");



if (currentHour >= 0 && currentHour < 12) {
  console.log("Hello " + name + ", Good Morning");
} else if (currentHour >= 12 && currentHour < 17) {
  console.log("Hello " + name + ", Good Afternoon");
} else if (currentHour >= 17 && currentHour < 21) {
  console.log("Hello " + name + ", Good Evening");
} else {
  console.log("Hello " + name + ", Good Night");
}


console.log("Your DOB is " + dobDay + "/" + dobMonth + "/" + dobYear + " (Pakistan Standard Time)");


var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();

var ageInYears = currentYear - dobYear;
var ageInMonths = currentMonth - dobMonth;
var ageInDays = currentDay - dobDay;
var ageInHours = (ageInDays * 24) + currentHour;
var ageInMinutes = (ageInHours * 60) + currentMinute;
var ageInSeconds = (ageInMinutes * 60) + currentSecond;

console.log("You are " + ageInYears + " years " + ageInMonths + " month " + ageInDays + " days " + currentHour + " hours " + currentMinute + " minutes " + currentSecond + " seconds old");


var ageInDays = (ageInYears * 365) + (ageInMonths * 30) + ageInDays;
console.log("Your age in days: " + ageInDays);
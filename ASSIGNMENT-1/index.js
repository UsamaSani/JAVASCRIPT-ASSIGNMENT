  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var sign = prompt("Enter the operator (+, -, *, /, %):");

  if (sign === "+") {
    alert(num1 + " + " + num2 + " = " + (num1 + num2));
  } else if (sign === "-") {
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
  } else if (sign === "*") {
    alert(num1 + " * " + num2 + " = " + (num1 * num2));
  } else if (sign === "/") {
    alert(num1 + " / " + num2 + " = " + (num1 / num2));
  } else if (sign === "%") {
    alert(num1 + " % " + num2 + " = " + (num1 % num2));
  } else {
    alert("Invalid operator");
  }

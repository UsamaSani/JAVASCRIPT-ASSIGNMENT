
var inputValue = prompt("Enter a string in lowercase", "cloud native computing");


var words = inputValue.split(" ");
for (var i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}


inputValue = words.join(" ");


console.log(inputValue);

document.write(inputValue);
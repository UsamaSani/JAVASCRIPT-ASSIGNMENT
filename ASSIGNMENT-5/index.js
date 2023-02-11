var userInput = 3.4;
var roundedNumber = Math.ceil(userInput);
var text = "my name is usama";
var sliceText = text.slice(0, roundedNumber);
var reverseText = "";

for (var i = sliceText.length - 1; i >= 0; i--) {
  reverseText += sliceText[i];
}

alert(reverseText);

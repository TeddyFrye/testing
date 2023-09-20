//Actual Function
function capitalize(inputStr) {
  if (!inputStr) return "";
  return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
}

capitalize("hello");

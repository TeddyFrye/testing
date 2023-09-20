// Test for capitalize function
// Lowercase word
test("capitalizes first leter of string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

// Empty string
test("returns empty string unchanged", () => {
  expect(capitalize("")).toBe("");
});

// Already capitalized
test("returns already capitalized string unchanged", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

// String that starts with a non-alphabet character
test("returns string with non-alphabetic start unchanged", () => {
  expect(capitalize("123hello")).toBe("123hello");
});

//Actual Function
function capitalize(inputStr) {
  if (!inputStr) return "";
  return inputStr.charAt(0).toUpperCase() + inputStr.slice(1);
}

capitalize("hello");

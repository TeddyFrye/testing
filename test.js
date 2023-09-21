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

// Tests for reverseString function
test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("returns empty string unchanged", () => {
  expect(reverseString("")).toBe("");
});

test("returns string with non-alphabetic start reversed", () => {
  expect(reverseString("123hello")).toBe("olleh321");
});

test("returns string with spaces and symbols reversed", () => {
  expect(reverseString("hello world!")).toBe("!dlrow olleh");
});

//Actual Function
function reverseString(inputStr) {
  return inputStr.split("").reverse().join("");
}

reverseString("hello");

// Tests for calculator functions
test("adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds two negative numbers", () => {
  expect(add(-1, -2)).toBe(-3);
});

test("subtracts two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});

test("subtracts two negative numbers", () => {
  expect(subtract(-1, -2)).toBe(1);
});

test("multiplies two numbers", () => {
  expect(multiply(1, 2)).toBe(2);
});

test("multiplies two negative numbers", () => {
  expect(multiply(-1, -2)).toBe(2);
});

test("divides two numbers", () => {
  expect(divide(1, 2)).toBe(0.5);
});

test("divides two negative numbers", () => {
  expect(divide(-1, -2)).toBe(0.5);
});

test("divides by zero", () => {
  expect(divide(1, 0)).toBe(Infinity);
});

//Actual Functions
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

add(1, 2);
subtract(1, 2);
multiply(1, 2);
divide(1, 2);

// Tests for caesar function
test("shifts letters by 1", () => {
  expect(caesar("hello", 1)).toBe("ifmmp");
});

test("shifts letters by 2", () => {
  expect(caesar("hello", 2)).toBe("jgnnq");
});

test("shifts letters by 50", () => {
  expect(caesar("hello", 50)).toBe("fcjjm");
});

test("shifts letters by -1", () => {
  expect(caesar("hello", -1)).toBe("gdkkn");
});

test("shifts letters by -2", () => {
  expect(caesar("hello", -2)).toBe("fcjjm");
});

test("shifts letters by -50", () => {
  expect(caesar("hello", -50)).toBe("jgnnq");
});

test("shifts letters by 0", () => {
  expect(caesar("hello", 0)).toBe("hello");
});

test("shifts letters by 1 with punctuation", () => {
  expect(caesar("hello!", 1)).toBe("ifmmp!");
});

test("shifts letters by 1 with different cases", () => {
  expect(caesar("HellO", 1)).toBe("IfmmP");
});

//Actual Function
function caesar(inputStr, shift) {
  shift = ((shift % 26) + 26) % 26; // Normalize the shift to [0, 25]

  let outputStr = "";
  for (let i = 0; i < inputStr.length; i++) {
    let charCode = inputStr.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase characters
      outputStr += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase characters
      outputStr += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      outputStr += inputStr.charAt(i); // Non-alphabetical characters
    }
  }

  return outputStr;
}

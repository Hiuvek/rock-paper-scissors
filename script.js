function getUserInput() {
  const userInput = prompt("Please enter your input:");
  return userInput;
}
function processInput(userInput) {
  // Normalizar texto a minúsculas
  const normalizedInput = userInput.toLowerCase();
  return normalizedInput;
}
getUserInput();
let input = processInput(getUserInput());
console.log("User Input:", input);

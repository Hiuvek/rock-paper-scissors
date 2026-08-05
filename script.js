function getUserInput() {
  const userInput = prompt("Please enter your input:");
  return userInput;
}
// Normalizar texto a minúsculas
function processInput(userInput) {
  const normalizedInput = userInput.toLowerCase();
  return normalizedInput;
}
function randomChoice() {
  const randomInt = Math.floor(Math.random() * (4 - 1)) + 1;
  return randomInt;
}
for (let i = 0; i < 3; i++) {
  let userInput = getUserInput();
  let processedInput = processInput(userInput);
  console.log("User Input:", processedInput);
  console.log("Random Choice:", randomChoice());
}

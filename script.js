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
  switch (randomInt) {
    case 1:
      return "piedra";
    case 2:
      return "papel";
    case 3:
      return "tijera";
  }
}
// Código principal
function playGame() {
  for (let i = 0; i < 3; i++) {
    let userInput = getUserInput();
    let processedInput = processInput(userInput);
    console.log("Elegiste:", processedInput);
    console.log("Pc Elige:", randomChoice());
    contHumano = 0;
    contPc = 0;
    //Papel
    if (processedInput === "papel" && randomChoice() === "tijera") {
      console.log("Perdiste!");
      contPc++;
    } else if (processedInput === "papel" && randomChoice() === "piedra") {
      console.log("Ganaste!");
      contHumano++;
    } else if (processedInput === "papel" && randomChoice() === "papel") {
      console.log("Empate!");
    }
    //Piedra
    if (processedInput === "piedra" && randomChoice() === "papel") {
      console.log("Perdiste!");
      contPc++;
    } else if (processedInput === "piedra" && randomChoice() === "tijera") {
      console.log("Ganaste!");
      contHumano++;
    } else if (processedInput === "piedra" && randomChoice() === "piedra") {
      console.log("Empate!");
    }
    //Tijera
    if (processedInput === "tijera" && randomChoice() === "papel") {
      console.log("Ganaste!");
      contHumano++;
    } else if (processedInput === "tijera" && randomChoice() === "piedra") {
      console.log("Perdiste!");
      contPc++;
    } else if (processedInput === "tijera" && randomChoice() === "tijera") {
      console.log("Empate!");
    }
  }
  //Evaluar resultados
  if (contHumano > contPc) {
    console.log("Ganaste el juego!");
    console.log("Puntaje final - Humano:", contHumano, "PC:", contPc);
  } else if (contHumano < contPc) {
    console.log("Perdiste el juego!");
    console.log("Puntaje final - Humano:", contHumano, "PC:", contPc);
  } else {
    console.log("El juego terminó en empate!");
    console.log("Puntaje final - Humano:", contHumano, "PC:", contPc);
  }
}
playGame();

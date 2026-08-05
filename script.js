function getUserInput() {
  const userInput = prompt("Elige piedra, papel o tijera:");
  return userInput;
}

function processInput(userInput) {
  const normalizedInput = userInput.toLowerCase();
  return normalizedInput;
}

function randomChoice() {
  const randomInt = Math.floor(Math.random() * 3) + 1;

  switch (randomInt) {
    case 1:
      return "piedra";
    case 2:
      return "papel";
    case 3:
      return "tijera";
  }
}

function playGame() {
  let contHumano = 0;
  let contPc = 0;

  function playRound(humanChoice, computerChoice) {
    console.log("Elegiste:", humanChoice);
    console.log("PC eligió:", computerChoice);

    // Papel
    if (humanChoice === "papel" && computerChoice === "tijera") {
      console.log("¡Perdiste! Tijera vence a papel.");
      contPc++;
    } else if (humanChoice === "papel" && computerChoice === "piedra") {
      console.log("¡Ganaste! Papel vence a piedra.");
      contHumano++;
    } else if (humanChoice === "papel" && computerChoice === "papel") {
      console.log("¡Empate!");
    }

    // Piedra
    if (humanChoice === "piedra" && computerChoice === "papel") {
      console.log("¡Perdiste! Papel vence a piedra.");
      contPc++;
    } else if (humanChoice === "piedra" && computerChoice === "tijera") {
      console.log("¡Ganaste! Piedra vence a tijera.");
      contHumano++;
    } else if (humanChoice === "piedra" && computerChoice === "piedra") {
      console.log("¡Empate!");
    }

    // Tijera
    if (humanChoice === "tijera" && computerChoice === "papel") {
      console.log("¡Ganaste! Tijera vence a papel.");
      contHumano++;
    } else if (humanChoice === "tijera" && computerChoice === "piedra") {
      console.log("¡Perdiste! Piedra vence a tijera.");
      contPc++;
    } else if (humanChoice === "tijera" && computerChoice === "tijera") {
      console.log("¡Empate!");
    }

    console.log("-----------------------------");
  }

  for (let i = 0; i < 5; i++) {
    const userInput = getUserInput();
    const humanChoice = processInput(userInput);
    const computerChoice = randomChoice();

    console.log(`Ronda ${i + 1}`);
    playRound(humanChoice, computerChoice);
  }

  if (contHumano > contPc) {
    console.log("¡Ganaste el juego!");
  } else if (contHumano < contPc) {
    console.log("¡Perdiste el juego!");
  } else {
    console.log("¡El juego terminó en empate!");
  }

  console.log("Puntaje final - Humano:", contHumano, "PC:", contPc);
}

playGame();

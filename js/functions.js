function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
if (randomNumber == "1") {
  computerMove = "kamień";
} else if (randomNumber == "2") {
  computerMove = "papier";
} else {
  computerMove = "nożyce";
}
printMessage("Mój ruch: " + computerMove);

var playerInput, playerMove;

playerInput;
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("Wpisana odpowiedź to: " + playerInput);
if (playerInput == "1") {
  playerMove = "kamień";
} else if (playerInput == "2") {
  playerInput = "papier";
} else if (playerInput == "3") {
  playerInput = "nożyce";
} else {
  playerMove = "nieznany ruch";
}
printMessage("Twój ruch: " + playerMove);

var argComputerMove,
  argMoveId,
  argPlayerMove,
  computerMove,
  playerInput,
  playerMove,
  randomNumber;

/**
 * getMoveName
 */
function getMoveName(argMoveId) {
  console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
  if (argMoveId == 1) {
    return "kamień";
  } else if (argMoveId == 2) {
    return "nożyce";
  } else if (argMoveId == 3) {
    return "papier";
  } else {
    printMessage(
      "Nie znam ruchu o id " + argMoveId + '. Zakładam, że chodziło o "kamień".'
    );
    return "kamień";
  }
}

/**
 * displayResult
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log(
    "wywołano funkcję displayResults z argumentami: " +
      argPlayerMove +
      ", " +
      argComputerMove
  );
  if (argPlayerMove == "papier" && argComputerMove == "kamień") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == "kamien" && argComputerMove == "nożyce") {
    printMessage("Wygrywasz!");
  } else if (argPlayerMove == argComputerMove) {
    printMessage("Przegrywasz :(");
  } else {
    printMessage("Przegrywasz :(");
  }
  printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
}
playerInput = prompt("Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.");
console.log("wybór ruchu gracza to: " + playerInput);
playerMove = getMoveName(playerInput);
console.log("ruch gracza to: " + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("wylosowana liczba to: " + randomNumber);
computerMove = getMoveName(randomNumber);
console.log("ruch komputera to: " + computerMove);
displayResult(playerMove, computerMove);

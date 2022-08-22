/**
 * Function buttonClicked
 */
function buttonClicked(playerMove) {
  clearMessages();

  function getMoveName(argMoveId) {
    console.log("wywołano funkcję getMoveName z argumentem: " + argMoveId);
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    } else {
      printMessage(
        "Nie znam ruchu o id " +
          argMoveId +
          '. Zakładam, że chodziło o "kamień".'
      );
    }
  }

  /**
   * Function displayResult
   */
  function displayResult(argPlayerMove, argComputerMove) {
    printMessage(
      "Komputer wybrał " + argComputerMove + ", a gracz wybrał " + argPlayerMove
    );
    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove) {
      printMessage("Remis");
    } else {
      printMessage("Przegrywasz :(");
    }
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  displayResult(playerMove, computerMove);
}

buttonRock = document.getElementById("button-rock");
buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
buttonPaper = document.getElementById("button-paper");
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
buttonScissors = document.getElementById("button-scissors");
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});

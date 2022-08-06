function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

var computermove;
playermove = "kamień";
printMessage(
  "Zagrałem" + computermove + "! Jeśli Twój ruch to papier, to wygrywasz!"
);
playermove = "papier";
printMessage(
  "Zagrałem " + playermove + "! Jeśli Twój ruch to kamień, to wygrywasz!"
);

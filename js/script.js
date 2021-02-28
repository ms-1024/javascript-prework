let round = 0, pointsGamer = 0, pointsComputer = 0;
const result = document.getElementById('result');
const messages = document.getElementById('messages');
const divResult = document.getElementById('result');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    function getMoveName(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
    }

    function winner() {
      printMessage('Wygrywasz!');
      pointsGamer++;
      messages.style.backgroundColor = 'green';
    }

    function looser() {
      printMessage('Przegrywasz :(');
      pointsComputer++;
      messages.style.backgroundColor = 'red';
    }

    function deadHeat() {
      printMessage('Remis');
      messages.style.backgroundColor = '#e0e0e0';
    }

    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        winner();
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        winner();
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        winner();
      } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
        deadHeat();
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
        deadHeat();
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
        deadHeat();
      } else {
        looser();
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

    messages.style.display = "block";
    divResult.style.display = "block";
    round++;
    const playerMove = argButtonName;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    result.innerHTML = `Runda: ${round}:<br>Punkty gracza: ${pointsGamer} - Punkty komputera: ${pointsComputer}`;
}

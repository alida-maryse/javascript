var max = 100
var min = 1
var number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(number)

var prompt = require('prompt');

prompt.start();

function displayPrompt() {
  prompt.get({ name: 'computerchoice', description: 'Quel est le chiffre mystère?' }, function (
    err,
    result
  ) {
    var userChoice
    userChoice = parseInt(result['computerchoice'])
    console.log(typeof userChoice)

    if (userChoice === number) {
      console.log('Bravo tu es la meilleure')

    } else if(userChoice > number) {
       console.log('c\'est moins')
      displayPrompt();
    } else {
      console.log('c\'est plus')
      displayPrompt();
    }
  });
}
displayPrompt();

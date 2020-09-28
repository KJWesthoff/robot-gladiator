// fight function

function fight() {
  window.alert("The fight has started!");
}

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;

var fight = function () {
  // alert users that they are starting the gameround
  window.alert("Welcome to Robot Gladiators!");

  //Subtract the value of playerAttack from the vaĺue of enemyHealth, use result to update the value in the enemyHealth variable
  enemyHealth = enemyHealth - playerAttack;

  //Log a resulting message to the console so we know it works
  console.log(
    playerName +
      " attacked " +
      enemyName +
      ". " +
      enemyName +
      " now has " +
      enemyHealth +
      " health remaining."
  );
  // check enemys health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } else {
    window.alert(enemyName + " still has: " + enemyHealth + " health left");
  }

  //Subtract the value of enemyAttack from the value of playerHealth, use the result to update the value in the playerHealth var
  playerHealth = playerHealth - enemyAttack;

  //Log a resulting message to the console so we know it works
  console.log(
    enemyName +
      " attacked " +
      playerName +
      ". " +
      playerName +
      " now has " +
      playerHealth +
      " health remaining."
  );

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has: " + playerHealth + " health left");
      }
};

fight();

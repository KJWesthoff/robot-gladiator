// fight function

function fight() {
  window.alert("The fight has started!");
}

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 10;
var enemyMoney = 10;

var fight = function () {
  // alert users that they are starting the gameround
  window.alert("Welcome to Robot Gladiators!");
  
  var promptFight = window.prompt("FIGHT or skip");

  // control flight or fight
  if (promptFight.toLowerCase() === "fight"){
    // remove enemy healtn
    enemyHealth = enemyHealth-playerAttack;
      
    //Log a resulting message to the console so we know it works
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );
    
    // check enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " still has: " + enemyHealth + " health left");
    }
   
    //remove players health 
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    
    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(playerName + " still has: " + playerHealth + " health left");
    }
  } else if (promptFight.toLowerCase() === "skip"){
     

      var confirmSkip = window.confirm("Are you sure you want to quit?");

      //if yes to quit, leave fight
      if (confirmSkip){
          window.alert(playerName + "has decided to skip thuis fight. See ya");
          playerMoney -= 2;
      }
      else{
          fight();
      }



  } else{
      window.alert("pick either fight or skip try again");
  }
}
fight();

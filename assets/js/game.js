var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var enemyMoney = 10;


// main fight function
var fight = function (enemyName) {
  // alert users that they are starting the gameround
  
  while(enemyHealth>0){
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
}

// Loop over enemies
for (var i =0;i<enemyNames.length; i++){
    debugger;
    //set enemy variables
    var pickedEnemyName = enemyNames[i]; 
    enemyHealth = 50;
    //call fight function
    
    fight(pickedEnemyName);
}


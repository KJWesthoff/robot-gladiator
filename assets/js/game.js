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
  
  while(enemyHealth>0 && playerHealth>0){
    // ask if user wants to quit
    var promptFight = window.prompt("FIGHT or skip");
    
    if (promptFight.toLowerCase() === "skip"){
        
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        //if yes to quit, break
        if (confirmSkip){
            
            window.alert(playerName + "has decided to skip thuis fight. See ya");
            playerMoney -= 10;
            console.log("Player Money", playerMoney )
            break;
        }    
    } 

 
    // remove enemy healtn
    enemyHealth = enemyHealth-playerAttack;
        
    //Log a resulting message to the console so we know it works
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );
        
    // check enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney += 20;
        break;
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
        break //break if player dies
    } else {
        window.alert(playerName + " still has: " + playerHealth + " health left");
    }
  }
};

// Main loop over enemies
for (var i =0;i<enemyNames.length; i++){
    if(playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + ( i+1));
    }else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    //set enemy variables
    var pickedEnemyName = enemyNames[i]; 
    enemyHealth = 50;
    //call fight function
    
    fight(pickedEnemyName);
}


var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var enemyMoney = 10;


//functon to end game
var endGame = function(){
    window.alert("The game has now ended, lets see how you did!")
    // if player os still alive, player wins"
    if (playerHealth > 0){
        window.alert("Great job you survived, you now have: " + playerMoney + " credit.");
    } else {
        window.alert("You lost the robot battle");
    }

    //ask if player wants to play again
    var playAgainConfirm = window.confirm("Play again?");

    if(playAgainConfirm){
        startGame();
    } else {
        window.alert("Thanks for playing - come back soon")
    }


}

var shop = function(){
    // ask what the player wants to do
    var shopOptionPrompt = window.prompt("REFILL health or UPGRADE atttack or LEAVE");

    switch(shopOptionPrompt.toLocaleLowerCase()){
        case "refill":
            if (playerMoney>=7){    
                window.alert("Refilling " + playerName + " health by 20 for 7 credit");
                playerHealth += 20;
                playerMoney -= 7;
            } else {
                window.alert("You don't have enough money!");
            }
                break;
                
        case "upgrade":
            if(playerMoney>=7){
            window.alert("Upgrading " + playerName + " attack by 6 for 7 credit");
            playerAttack += 6;
            playerMoney -=7;
            } else {
                window.alert("You don't have enough money!");
            }            

            break;
            
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("Pick a valid option- try again");
            // call shop again to pick valid option
            shop();
            break;
    }
}

//function to start a new game
var startGame = function(){
    debugger;
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // loop over enemies
    for(var i = 0; i<enemyNames.length; i++){
        if(playerHealth > 0){
            window.alert("Welcome to Robot Warriors Round:" + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40,60);

            fight(pickedEnemyName);

            // goto the shop if there are more enemies to fight
            if(playerHealth > 0 && i < enemyNames.length-1){
                var storeConfirm = window.confirm("Fight is over, enter the shop?");
                if(storeConfirm){
                    shop();        
                }
                
            }
        } else {
            window.alert("You have lost your robot battle! Game over!");
            break;
        }
    }
    // after loop ends player is eiter out of health or enemies,..
    endGame();
}


// function to generate a random numeric value between min and max
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };



// main fight function
var fight = function (enemyName) {
  // alert users that they are starting the gameround
  
  while(enemyHealth>0 && playerHealth>0){
    // ask if user wants to quit
    var promptFight = window.prompt("FIGHT or skip").toLocaleLowerCase();
    
    if (promptFight === "skip"){
        
        var confirmSkip = window.confirm("Are you sure you want to quit?");

        //if yes to quit, break
        if (confirmSkip){
            
            window.alert(playerName + "has decided to skip thuis fight. See ya");
            playerMoney = Math.max(0, playerMoney-10);
            console.log("Player Money", playerMoney )
            break;
        }    
    } 

 
    // remove enemy healtn
    var damage = randomNumber(playerAttack-3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth-damage);
        
    //Log a resulting message to the console so we know it works
    console.log(
        playerName + " attacked " + enemyName + " with damage: " + damage + " ." + enemyName + " now has " + enemyHealth + " health remaining." 
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
    var damage = randomNumber(enemyAttack-3, enemyAttack); 
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
        enemyName + " attacked " + playerName + " with damage: " + damage +". " + playerName + " now has " + playerHealth + " health remaining."
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

// // Main loop over enemies
// for (var i =0;i<enemyNames.length; i++){
//     if(playerHealth > 0){
//         window.alert("Welcome to Robot Gladiators! Round " + ( i+1));
//     }else {
//         window.alert("You have lost your robot in battle! Game Over!");
//         break;
//     }
//     //set enemy variables
//     var pickedEnemyName = enemyNames[i]; 
//     enemyHealth = 50;
//     //call fight function
    
//     fight(pickedEnemyName);
// }

startGame()


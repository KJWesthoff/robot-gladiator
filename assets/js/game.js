


//functon to end game
var endGame = function(){
    window.alert("The game has now ended, lets see how you did!")
    // if player os still alive, player wins"
    if (playerInfo.health > 0){
        window.alert("Great job you survived, you now have: " + playerInfo.money + " credit.");
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

    switch(shopOptionPrompt.toLowerCase()){
        case "refill":
            playerInfo.refillHealth();
            break;
                
        case "upgrade":
            playerInfo.upgradeAttack();
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
    
    //reset player stats
    playerInfo.reset();

    // loop over enemies
    for(var i = 0; i<enemyInfo.length; i++){
        
        if(playerInfo.health > 0){
            window.alert("Welcome to Robot Warriors Round:" + (i+1));
           
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);

            fight(pickedEnemyObj);

            // goto the shop if there are more enemies to fight
            if(playerInfo.health > 0 && i < enemyInfo.length-1){
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


var fightOrSkip = function(){
    // ask user if they will fight or skip the round
    var promptFight = window.prompt("FIGHT or skip");
    promptFight = promptFight.toLowerCase()

    //recursive call if 
    if( promptFight === "" || promptFight === null){
        window.alert("Please provide a valid answer");
        return fightOrSkip();
    }
    
    if (promptFight=== "skip"){
        var confirmSkip = window.confirm("are you sure you want to skip?")
    }
    if (confirmSkip){
        window.alert(playerInfo.name + "has decided to skip thuis fight. See ya");
        playerInfo.money = Math.max(0, playerInfo.money-10);
        // Send'em through the exit shop
        shop()
        return true;
    }

}


// main fight function
var fight = function (enemy) {
  
    // alert users that they are starting the gameround
  
  while(enemy.health>0 && playerInfo.health>0){
    // ask if user wants to quit

    while (playerInfo.health > 0 && enemy.health > 0) {
        // ask user if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
          // if true, leave fight by breaking loop
          break;
        }
    }
 
    // remove enemy healtn
    var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health-damage);
        
    //Log a resulting message to the console so we know it works
    console.log(
        playerInfo.name + " attacked " + enemy.name + " with damage: " + damage + " ." + enemy.name + " now has " + enemy.health + " health remaining." 
    );
        
    // check enemys health
    if (enemy.healh <= 0) {
        window.alert(enemy.name + " has died!");
        playerInfo.money += 20;
        break;
    } else {
        window.alert(enemy.name + " still has: " + enemy.health + " health left");
    }

    //remove players health
    var damage = randomNumber(enemy.attack-3, enemy.attack); 
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
        enemy.name + " attacked " + playerInfo.name + " with damage: " + damage +". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    
    // check player health
    if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break //break if player dies
    } else {
        window.alert(playerInfo.name + " still has: " + playerInfo.health + " health left");
    }
  }
};


// function to set name
var getPlayerName = function(){
    var name = "";
    
    while (name === "" || name === null){
        name = prompt("what is your robo's name");
    }
    //loop here
    console.log("your robots name is" + name );
    return name;
};


var test = function(){
    var response = prompt("Question?");
    if(response === "" || response === null){
        window.alert("You need to provide a valid answer! Try again")
        test();
    }
    return response;
}

var playerInfo = {
    name : getPlayerName(),

    reset: function(){
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      },
      upgradeAttack: function() {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
      }
    };

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10,14)
    },
    {
      name: "Amy Android",
      attack:  randomNumber(10,14)
    },
    {
      name: "Robo Trumble",
      attack:  randomNumber(10,14)
    }
  ];

  
  // main

startGame()


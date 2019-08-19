const startCombat = (user) => {

const player = {
  health: 40,
  name: user, 
  getDamage: function() {
  return this.health -= Math.floor(Math.random()*5+1);
}
}  
const Grant = {
  health: 10,
  name: "Grant the Almighty", 
  getDamage: function() {
  return this.health -= Math.floor(Math.random()*5+1);
}
}  

let wins = 0;

  while (wins < 3 && player.health > 0) {
  const attack = prompt('Attack or Quit?').toLowerCase();
  if (attack === 'attack'){
   player.getDamage();
   console.log(`${player.name}'s health points are now ${player.health}`);
   Grant.getDamage();
   console.log(`${Grant.name}'s health points are now ${Grant.health}`);  
  } else if (attack === 'quit'){
  console.log('Bye');
  break;
} 
if(Grant.health <= 0){
  console.log(`${Grant.name} is defeated`);
  Grant.health = 10;
  wins = wins +1;  
}
if(wins === 3){
console.log(`${player.name} Wins`);
} else if(player.health <= 0){
console.log(`${Grant.name} Wins`);
}

}

}

const startGame = () => {
const play = prompt('Would you like to play a game?').toLowerCase();
if (play === 'no'){
  console.log('Bye Felicia'); 
} else if(play === 'yes'){
const user = prompt('What is your name?');
startCombat(user);
}
}
startGame();
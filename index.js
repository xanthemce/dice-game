let point2 = 0
let point1 = 0
let round = 0
let lucky1 = 0
let lucky2 = 0
var playerRound = prompt('how many rounds would you like to play?')
while(isNaN(playerRound)||(playerRound<1)){
  console.log('that is not a valid number. please enter a number')
  playerRound = prompt('how many rounds would you like to play?')
}


do{
let dice1 = Math.floor(Math.random() * 6 + 1);
let dice2 = Math.floor(Math.random() * 6 + 1);

  
var play1 = prompt('player 1, would you like to roll the dice: yes or no:')
if (play1 == 'yes'){
console.log('here we go')

console.log('you rolled a ' + dice1)
}
else if(play1 == 'no'){
  console.log('okay thanks for playing')
  break;
}
else{
  console.log('that is an invalid input. Please enter yes or no')
  play1 = prompt('would you like to roll the dice: yes or no:')
}

// 	if (dice1 = 2){
//   console.log('you get an extra point for rolling a two')
//   point1++
// }
// if (dice1 = 6){
// lucky1++
// }
  


var play2 = prompt('player 2, would you like to roll the dice: yes or no:')
if (play2 == 'yes'){
console.log('here we go')
console.log('you rolled a ' + dice2)
}
else if(play2 == 'no'){
  console.log('okay thanks for playing')
  break;
}
else{
  console.log('that is an invalid input. Please enter yes or no')
  play2 = prompt('would you like to roll the dice: yes or no:')
}

// if (dice2=2){
//   console.log('you get an extra point for rolling a two')
//   point2++
// }
  
// if (dice2=6){
//   lucky2++
// }

if(dice1 < dice2){
  console.log('player 2 wins this round!')
  point2++
}
else if(dice1 > dice2){
  console.log('player 1 wins this round!')
  point1++

}
else{
  console.log('its a tie this round! lets play again')
}
round++
console.log('player 1 has ' + point1 + ' points.')
console.log('player 2 has ' + point2 + ' points.')
}
while(round<playerRound)
  
  if(point1<point2){
  console.log('player 2 wins the game!')
}
else if(point1>point2){
  console.log('player 1 wins the game!')
}
else{
  console.log('it was a tie!')
}
if(lucky1<lucky2){
  console.log('player 2 got more sixes. They got ' + lucky2 + ' sixes')
}
else if(lucky1>lucky2){
  console.log('player 1 got more sixes. They got ' + lucky1 + ' sixes')
}
else{
  console.log('you got the same amount of sixes')
}
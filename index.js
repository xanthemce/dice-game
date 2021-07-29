console.log('welcome to the dice game. roll the digital dice and compete for the highest roll. If you roll a 2 your points will be doubled (unless you had 0 points to start with), and sixes are counted up and the player with the most gets 2 extra points at the end. If at any point you wish to stop the game, just say no when you are asked to roll again.')

dice = [1, 2, 3, 4, 5, 6,]
let length = dice.length

roll1= Math.floor(Math.random() * length + 0)
number1= (dice[roll1])
roll2=Math.floor(Math.random() * length + 0)
number2=(dice[roll2])



let point2 = 0
let point1 = 0
let round = 0
let lucky1 = 0
let lucky2 = 0
var playerRound = prompt('how many rounds would you like to play?')
while((isNaN(playerRound))||(playerRound<1)||(playerRound == null)||(playerRound==' ')||(playerRound % 1 != 0)){
  console.log('that is not a valid number. please enter a number')
  playerRound = prompt('how many rounds would you like to play?')
}


do{
// let dice1 = Math.floor(Math.random() * 6 + 1);
roll1= Math.floor(Math.random() * length + 0)
number1= (dice[roll1])
roll2=Math.floor(Math.random() * length + 0)
number2=(dice[roll2])



  
var play1 = prompt('player 1, would you like to roll the dice: yes or no:')
if (play1 == 'yes'){
console.log('here we go')
console.log('you rolled a ' + number1)

if(number1==2){
  console.log('you got a two, so you get double points')
  point1=point1*2
}
else if((number1==2)&&(point1=0)){
  console.log('you got a two, so you get double point. Looks like you had zero points though so no doubling for you.')
}

if(number1==6){
  lucky1++
  console.log('ooo lucky player 1 got a six!')
}
// if(dice1=2){
//   console.log('you rolled a ' + dice1)
//   point1++
//   console.log('you get an extra point for rolling a two!')
  
// }
// else{
//   console.log('you rolled a ' + dice1)
// }
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
  
// let dice2 = Math.floor(Math.random() * 6 + 1);

var play2 = prompt('player 2, would you like to roll the dice: yes or no:')
if (play2 == 'yes'){
console.log('here we go')
console.log('you rolled a ' + number2)

if(number2==dice[1]){
  console.log('you got a two, so you get double points')
  point2=point2*2
}
else if((number2==2) && (point2=0)){
  console.log('you got a two, so you get double point. Looks like you had zero points though so no doubling for you.')
}
if(number2==6){
  lucky2++
  console.log('ooo lucky player 2 got a six!')
}
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

if(number1 < number2){
  console.log('player 2 wins this round!')
  point2++
}
else if(number1 > number2){
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
  
if(lucky1>lucky2){
  point1 = point1+2
  console.log('player 1 got the most sixes. they get 2 extra points.')
} 
else if(
  lucky2>lucky1
){
  point2 = point2+2
  console.log('player 2 got the most sixes. they get 2 extra points.')
}
else{
  point1 = point1+100
  point2 = point2+100
  console.log('you got the same amount of sixes! Everyone gets 100 extra points')
}
  if(point1<point2){
  console.log('player 2 wins the game!')
}
else if(point1>point2){
  console.log('player 1 wins the game!')
}
else{
  console.log('it was a tie!')
}

console.log('player 1 got ' + point1 + ' points')
console.log('player 2 got ' + point2 + ' points')
// if(lucky1<lucky2){
//   console.log('player 2 got more sixes. They got ' + lucky2 + ' sixes')
// }
// else if(lucky1>lucky2){
//   console.log('player 1 got more sixes. They got ' + lucky1 + ' sixes')
// }
// else{
//   console.log('you got the same amount of sixes')
// }
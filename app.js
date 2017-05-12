'use strict';

var user = prompt('Welcome to my page! Before I let you in, how about we play a guessing game where you get to learn about me. First off, what is your name?');
console.log('user:' + user)

alert('Well, ' + user + '. Please answer my questions accordingly');

var answer0 = prompt(user + ', Do you know what a C-17 is? Y/N').toLowerCase();
console.log('users answer:' + answer0);

  if (answer0 === 'N' || answer0 === 'no' || answer0 === 'n' || answer0 === 'NO')
    alert('Well, it\'s a plane, a REALLY big one. I logged about 2000 flight hours flying on C-17s.')

var answer = prompt(user + ', do you like to travel? Y/N' ).toLowerCase();
console.log('users answer:' + answer);

  if (answer === 'Y' || answer === 'yes' || answer === 'y' || answer === 'YES') {
    alert('I LOVE traveling. That\'s kinda my jam. I lost count of the number of countries I\'ve been to.');
  }

var answer1 = prompt('Do you like basketball?').toLowerCase();
console.log('answer1:', answer1);

  if (answer1 === 'N' || answer1 === 'no' || answer1 === 'N' || answer1 === 'NO') {
    alert('Oh that\'s lame. Basketball is my favorite sport.');
}
var answer2 = prompt('Have you heard of Michael Jordan? He is kinda my hero..').toLowerCase();
console.log('answer2:', answer2)

  if (answer2 === 'N' || answer2 === 'no' || answer2 === 'N' || answer2 === 'NO'){
    alert('Have you been living under a rock?? He\'s a sports legend! How could you not know that name? You\'re probably gonna have a hard time with my next now.')
}

var number;
var counter = 1;

while (number !== 23 && counter < 5)  {
  number = parseInt(prompt('MJ wore this number on his jersey. It is also my favorite number, can you guess what it is?'));

  if (number < 23) {
    alert('too low, you have ' + counter + ' out of 4 tries.');
    counter++;
  } else if (number > 23) {
    alert('too high, you have ' + counter + ' out of 4 tries.');
    counter++;
  } else if (number === NaN || number === null) {
    alert('enter a number please');
    counter++;
    console.log('counter:', counter);
  }
}


var country = ['colombia', 'ireland', 'spain', 'austria', 'netherlands'];
var answer1 = prompt('Can you guess one of my favorite countries I\'ve visited?');
var flag = true;

for (var i=0; i < country.length; i++) {
console.log('current thing:', country[i]);

  if (answer === country[i]) {
    alert('Wow, good guess! I love that part of the world..')
  }
}
  if (!flag) {
    alert('Nah, not there.')
  }

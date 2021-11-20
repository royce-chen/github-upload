// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

const values = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

function pickRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getCard() {
    return {value: pickRandomValue(values), suit: pickRandomValue(suits)};
}

myCard = getCard();
console.log(myCard.value);
console.log(myCard.suit);
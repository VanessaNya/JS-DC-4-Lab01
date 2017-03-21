// var prompt = require('prompt')
// prompt.start()
// prompt.get('enter your name')

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
// var values = [{
//   ace: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6,
//   seven: 7,
//   eight: 8,
//   nine: 9,
//   ten: 10,
//   jack: 11,
//   king: 12,
//   queen: 13
// }]
var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = [{'card': {'rank':'ace', 'value': 14}},
{'card': {'rank':'two', 'value': 2}},
{'card': {'rank':'three', 'value': 3}},
{'card': {'rank':'four', 'value': 4}},
{'card': {'rank':'five', 'value': 5}},
{'card': {'rank':'six', 'value': 6}},
{'card': {'rank':'seven', 'value': 7}},
{'card': {'rank':'eight', 'value': 8}},
{'card': {'rank':'nine', 'value': 9}},
{'card': {'rank':'ten', 'value': 10}},
{'card': {'rank':'jack', 'value': 11}},
{'card': {'rank':'queen', 'value': 12}},
{'card': {'rank':'king', 'value': 13}}
]

var cards = 52
var playerOne = []
var playerTwo = []

function createDeck(suits, ranks) {
  var deck = []

  for (var i = 0; i < suits.length; i++) {
    for (var r = 0; r < ranks.length; r++) {
      deck.push(ranks[r].card.value + ' of ' + suits[i])
    }
  }
  return deck
}
var deckOfCards = createDeck(suits, ranks)
 // console.log(deckOfCards)


while(deckOfCards.length !== 0) {
  playerOne.push(deckOfCards.shift())
  playerTwo.push(deckOfCards.shift())
}
// console.log(playerOne.length)
// console.log(playerTwo.length)

while (playerOne.length !== 0 || playerTwo.length !== 0) {
  if (playerOne[0].card.value > playerTwo[0].card.value) {
    console.log(playerOne[0].card.rank)
  } if (playerTwo[0].card.value > playerOne[0].card.value) {
    console.log(playerTwo[0].card.rank)
  } else {
    console.log('war!!!')
  }
 }

//  function selectCards() {
//     playerOne = playerOne.splice(Math.floor(Math.random() * playerOne.length), 1);
//     playerTwo = playerTwo.splice(Math.floor(Math.random() * playerTwo.length), 1);
//
//     if (playerOne[0].value == 1) {
//         playerOne[0].value = 14;
//    }
//     if (playerTwo[0].value == 1) {
//         playerTwo[0].value = 14;
//    }
//  }
//
// console.log(playerOne[0])


// function getCard(deck) {
//   var playerOneCard = Math.floor(Math.random() * playerOne.length)
//   return deck[playerOneCard]
// }
// var cardNum = getCard(deckOfCards)
// console.log(playerOne[0])
//
//
// for (i = 0; playerOne[0].length; i++) {
//   console.log('player one got '+ playerOne[0])
// }

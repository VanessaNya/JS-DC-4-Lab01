// to get players userNames
// var prompt = require('prompt')
// prompt.start()
// prompt.get(['playerOneUsername', 'playerTwoUsername'], function() {
//   var playerOne = (result.playerOneUsername)
//   var playerTwo = (result.playerTwoUsername)
// })


// cards displayed in the deck
// var rankScores = [{ ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
//   seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, king: 12, queen: 13}]
var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

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

module.exports = function Card(suit, rank) {
  this.suit = suit
  this.rank = rank
  this.title = rank + ' of ' + suit
  // this.score = rankScores[rank]
}

// divides deck of 52 cards between two players, so each have 26
function createDeck(suits, ranks) {
 var cards = []

   for (var i = 0; i < suits.length; i++) {
     for (var r = 0; r < ranks.length; r++) {
       cards.push(ranks[r].card.value + ' of ' + suits[i])
     }
   }
   return cards
 }
var deckOfCards = createDeck(suits, ranks)
console.log(deckOfCards)


while(deckOfCards.length !== 0) {
  playerOne.push(deckOfCards.shift())
  playerTwo.push(deckOfCards.shift())
}
console.log(playerOne.length)
console.log(playerTwo.length)

// this.cards = createDeck()
this.dealHand = function (handLength) {

var returnHand = []
for (var i = 0; i < handLength; i++) {
  var card = this.cards.splice(Math.random() * this.cards.length, 1 )[0]

      returnHand.push(card)
    }
     return returnHand
  }

// getting players cards
function Player(name, currentDeck) {
  this.name = name;
  this.currentDeck = []
  this.showDeckLength = function() {
    return this.currentDeck.length
  }
}

Player.prototype.getCurrentCard = function() {
    this.currentCard = this.currentDeck.shift();
}

// function playerOneCard() {}
// playerOneCard.prototype.toString = function() {
//     return playerOneCard[0].suit + " " + playerOneCard[0].name;
// }
// function playerTwoCard() {}
// playerTwoCard.prototype.toString = function() {
//     return playerTwoCard[0].suit + " " + playerTwoCard[0].name;
// }
// function selectCards() {
//     playerOneCard = this.card.splice(Math.floor(Math.random() * playerOneCard.length), 1);
//     playerTwoCard = this.card.splice(Math.floor(Math.random() * playerTwoCard.length), 1);
//
function playGame(playerOne, playerTwo) {
  if (playerOne[0].card.value > playerTwo[0].card.value) {
    console.log(playerOne[0].card.rank)
  } if (playerTwo[0].card.value > playerOne[0].card.value) {
    console.log(playerTwo[0].card.rank)
   } else {
    console.log('war!!!')
  }
}
var noWinners = true
while (noWinners) {
  if (playerOne.currentDeck.length === 0){
        console.log(playerTwoUsername)
} else {
    console.log(playerOne.getCurrentCard())
    }
  if (playerTwo.currentDeck.length === 0){
        console.log(playerOneUsername)
} else {
    console.log(getCurrentCard())
  }
}

playGame()
console.log('Game Over')

// this will call resetDisplay function which willstart a new game
$('#btn__reset').on('click', function(){
  resetDisplay();
});

// an array of phrases that willbe used for game
let phrases = ['you win','dream big', 'fish on', 'winner winner chicken dinner', 'dreams come true', 'hello'];
// this holds a new game with 0 missed guesses and holds array of phrases
let gameOne = new Game(0, phrases);

// this function will hide game overlay when game has started
function resetDisplay() {
  $('#overlay').hide();
  gameOne.startGame();
}

function markButton(){
  gameOne.handleInteraction();
}
markButton();

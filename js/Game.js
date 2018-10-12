class Game{
  constructor(missed, phrases) {
    this.missed = missed;
// this line of code returns array of phrases which creats a new phrase for game.
    this.phrases = phrases.map((phrase)=> new Phrase(phrase));
  }
// this function will choose a random phrase from array of phrases
  getRandomPhrase() {
    let phraseArray = this.phrases;
    let randomPhrase = phraseArray[Math.floor(Math.random() * phraseArray.length)];
    return randomPhrase;
  }
// this function will call checkletter and will handle interactions when a letter is clicked
  handleInteraction(){
    var heart = this;
    var win = this;
    this.phrases[0].checkLetter();
    $('.keyrow button').bind('click',function(){
    if ($(this).hasClass('phraseLetters')) {
      $(this).css("background-color", "#c7ffc6");
      win.checkForWin();
    } else {
      $(this).css("background-color", "#ff9999");
      $(this).attr('disabled','disabled');
      heart.removeLife();
    }
  })
}
//this will remove a heart everytimeaplayer guesses a letter incorrect and will call gameover when there are no hearts left.
  removeLife(){
		$('.tries:first').remove();
		this.missed +=1
			if (this.missed === 5) {
				this.gameOver();
			}
}
// if player wins, win page will display and player willbe able to play again
  checkForWin(){
    if ($('.correct').length === $('.letter').length) {
      $('.tries').remove();
      $('.keyrow button').removeClass('phraseLetters')
      $('.keyrow button').removeClass('correct')
      $('#overlay').removeClass('lose')
      $('#overlay').addClass('win').show();
      $('#game-over-message').text('You Win').show();
      $('#btn__reset').text('play again?');
      $('.key').attr('disabled',false);
      $('.key').css("background-color", "#e5e5e5");
      $('.hide').remove();
      $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`);
      $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
      $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
      $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
      $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
    }
}
//when player loses gameOver is called and resets game.
  gameOver(){
    $('.keyrow button').removeClass('phraseLetters')
    $('.keyrow button').removeClass('correct')
    $('#overlay').removeClass('win')
    $('#overlay').addClass('lose').show();
    $('#game-over-message').text('You Lose').show();
    $('#btn__reset').text('try again?');
    $('.key').attr('disabled',false);
    $('.key').css("background-color", "#e5e5e5");
    $('.hide').remove();
    $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`);
    $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
    $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
    $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
    $('ol').append(`<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>`)
  }
// this function gets the randomphrase function and displays it
  startGame(){
    this.missed = 0;
    let currentPhrase = this.getRandomPhrase();
    currentPhrase.addPhraseToDisplay();
    document.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });
  }
}

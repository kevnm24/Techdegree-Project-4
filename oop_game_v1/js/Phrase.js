class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

/* this function will select the randomPhrase and split it and add classes to each
   letter and space which will add placeholders tp the phrase when the game starts */
  addPhraseToDisplay() {
    let phraseChosen = this.phrase.split('');
    for (var i = 0; i < phraseChosen.length; i++) {
      if (phraseChosen[i] === ' ') {
        $('#phrase ul').append(`<li class="hide space"> </li>`);
      } else {
        $('#phrase ul').append(`<li class="hide letter ${phraseChosen[i]}">${phraseChosen[i]}</li>`);
      }
    }
  }
  checkLetter(){
    let show = this;
    $('.keyrow button').on('click',function(){
      let letters = document.getElementById("phrase").getElementsByTagName("li");
      for (var i = 0; i < letters.length; i++) {
        if ($(this).text() === letters[i].innerHTML) {
          $(this).addClass("phraseLetters");
          letters[i].classList.add("correct");
          show.showMatchedLetter();
        }
      }
    })
}
  showMatchedLetter(){
      $('.correct').css('color', 'black');
      $('.correct').css('background-color', '#b5e3ff');
  }
}

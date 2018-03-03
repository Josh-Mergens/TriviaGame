//$(document).ready(function(){
  // create trivia Questions
  var questionEverything = [
    {
      what: 'Name a punk band that could also be called "Rooster Pugulist"?',
      noChoice: ["Chicken Fighter", "Poultry Puncher", "Cock Sparrer", "Bird Boxer"],
      oneChance: 3
    },
    {
      what: 'Which of the following is *not* considered to be amongst the first punk rock bands?',
      noChoice: ["Velvet Underground", "The Clash", "New York Dolls", "The Stooges"],
      oneChance:  2
    },
    {
      what: 'The song "Olympia WA" orignated from which of the following 90s punk bands?',
      noChoice:["Rancid", "Greenday", "NOFX", "Pennywise"],
      oneChance: 1
    },
    {
      what: '"Lee Ving on a Jet Plane", is a play on words using the name of the (in?)famous front man of a late 70s - early 80s punk band. Which band did he front?',
      noChoice: ["The Adicts", "Agent Orange", "Fear", "Sham 69"],
      oneChance: 3,
    },
  ];

  // set up timer

  var dethKlok = {
    finalCountdown : 20,
    // timer initiate
    initiate: function() {

      this.finalCountdown = 20;
      $("#time-remaining").html('<h2>' + this.finalCountdown + ': Doom Counter<h2>');

    },

    start: function() {

      $("#time-remaining").html('<h2>' + this.finalCountdown + ': Doom Counter<h2>');

    },

    // timer stop
    stop: function() {

      clearInterval(tickTock);

    },

    increment: function() {

      dethKlok.finalCountdown--;

      if (dethKlok.finalCountdown >= 0) {
        $("#time-remaining").html('<h2>' + dethKlok.finalCountdown + ': Doom Counter<h2>');
      }

      else {
        //go to next question and reset timer
      };

    }

  }

  // choose question and append to trivialDefeat div

  // assign possible answers to chooserOrDie buttons

  // click events for choosing answers

  // check if chosen answer is correct or not

  // if answer is correct increment score and show victory message

  // if answer is false show defeat message

  // all questions have been answered, show appropriate end message


// commented out because of "token )" syntax error
//)};

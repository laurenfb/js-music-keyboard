$(document).ready( function() {
  // your code here

  var notes = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g']

  var alphabet = "CCGGAAGFFEEDDDDCGGFEEDGGGFEEDCCGGAAGFFEEDDC".toLowerCase();

  var stop = function(note) {
    // stolen from jeannie who stole it from the internet
    var song = document.getElementById(note + 'Audio');
    song.removeAttribute("src");
    song.load();
  }

  var playNoteClick = function(note) {
    $('.' + note).click( function() {
      stop(note);
      document.getElementById(note + 'Audio').play();
    });
  }

  var playNoteKeyPress = function(note) {
    $('body').keydown( function(event) {
      stop(note);
      if (event.key == note) {
        document.getElementById(note + 'Audio').play();
      };
    });
  }

  var playNoteForFunsies = function(note) {
    stop(note);
    document.getElementById(note + 'Audio').play();

  }

  var playSong = function(nameOfSong) {
    $('.alphabet').click( function() {
      var interval = 500;
      for (var i = 0; i < nameOfSong.length; i++) {
        setInterval(playNoteForFunsies(nameOfSong[i]), interval);
        interval += 500;
        console.log(nameOfSong[i]);
      }
    });
  }

  for (var i = 0; i < notes.length; i++) {
    playNoteClick(notes[i]);
    playNoteKeyPress(notes[i])
  };

  playSong(alphabet);

});

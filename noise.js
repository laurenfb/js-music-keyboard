$(document).ready( function() {
  // your code here

  var notes = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g']

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

  for (var i = 0; i < notes.length; i++) {
    playNoteClick(notes[i]);
    playNoteKeyPress(notes[i])
  };
});

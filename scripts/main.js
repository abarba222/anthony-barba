(function(){
  'use strict';

  $(document).ready(function(){
    $('.app').prepend(JST.index());

    $('#drunken-project').on('click', function() {
      window.open('http://abarba222.github.io/drunken_diplomacy/', 'Drunken Diplomacy', 'height=700px, width=1280px');
    });

    $('#stadium-project').on('click', function() {
      window.open('http://abarba222.github.io/ticker-tape-stadium/', 'Ticker-Tape Stadium', 'height=700px, width=1280px');
    });

  });
})();

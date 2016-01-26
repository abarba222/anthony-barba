require.register("main", function(exports, require, module){
  'use strict';

(function () {
  'use strict';

  $(document).ready(function () {
    $('.app').prepend(JST.index());

    $('#drunken-project').on('click', function () {
      window.open('http://abarba222.github.io/drunken_diplomacy/', 'Drunken Diplomacy', 'height=700px, width=1280px');
    });
  });
})();
  
});

//# sourceMappingURL=app.js.map

var init = function() {

  document.getElementById('back').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);

};

window.addEventListener('DOMContentLoaded', init, false);
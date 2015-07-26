var init = function() {
  // var card = document.getElementById('card');
  var backofCard = document.getElementById('back');
  console.dir("backofCard");
  // document.getElementById('flip').addEventListener( 'click', function(){
  //   card.toggleClassName('flipped');
  // }, false);

document.querySelector("#card").toggleClassName("flipped");
};



window.addEventListener('DOMContentLoaded', init, false);
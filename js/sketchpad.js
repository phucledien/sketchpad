squareNumber = 16;
containerWidth = 642;

$(document).ready(function() {
  $('.button').on('click', function() {
    var input = prompt("Please enter the number of square each side", "16");
    squareNumber = parseInt(input);
    makeGrid(squareNumber);
  });
  makeGrid(squareNumber);
});


function makeGrid(numberOfSquare) {
  if ($('.square').length > 0) {
    $('.container').empty();
  }
  var squareWidth = containerWidth/numberOfSquare;
  var squareNode = $('<div class="square"></div>').css({'width': squareWidth, 'height': squareWidth});
  for (var i = 1; i <= numberOfSquare*numberOfSquare; i++) {
    squareNode.clone().appendTo('.container');
  }
  $('.container > .square').mouseenter(function() {
    $(this).addClass('pen');
  });
}

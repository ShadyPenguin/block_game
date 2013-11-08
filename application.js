$(function() {
  establishBoard();
});

var width = 100
var height = 100

function establishBoard() {
  $('.outer-box').children().each(function(index, element) {
    this.setAttribute('pos-left', $(element).offset().left);
    this.setAttribute('pos-top',  $(element).offset().top);
  })
  declareMovable();
}

function declareMovable() {
  $('.tile').each(function(index, tile) {
    $(this).removeClass();
    $(this).addClass('tile');
    $(this).unbind();
    var tileIsLeft  = parseInt($(tile).attr('pos-left')) + 100 == $('.empty').attr('pos-left')
    var tileIsRight = parseInt($(tile).attr('pos-left')) - 100 == $('.empty').attr('pos-left')
    var tileIsAbove = parseInt($(tile).attr('pos-top'))  + 100 == $('.empty').attr('pos-top')
    var tileIsBelow = parseInt($(tile).attr('pos-top'))  - 100 == $('.empty').attr('pos-top')

    var tileIsHorizontal = $(tile).attr('pos-top')  == $('.empty').attr('pos-top')
    var tileIsVertical   = $(tile).attr('pos-left') == $('.empty').attr('pos-left')

    if(tileIsLeft && tileIsHorizontal) {
      $(this).addClass('move left');
    }

    else if(tileIsRight && tileIsHorizontal) {
      $(this).addClass('move right');
    }

    else if(tileIsBelow && tileIsVertical) {
      $(this).addClass('move down');
    }

    else if(tileIsAbove && tileIsVertical) {
      $(this).addClass('move up');
    }
  });
  moveBindings();
}

function moveBindings() {
  $('.move').on('click', function() {
    $('.empty').removeClass('empty').addClass('tile');
    $(this).removeClass('move tile');

    animateFeature($(this).attr('class'), $(this))

    $(this).removeClass();
    $(this).addClass('empty');
    declareMovable();
  });
}


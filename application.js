$(function() {
  establishBoard();
});

var width = 100
var height = 100

function establishBoard() {
  $('.outer-box').children().each(function(index, element) {
    this.setAttribute('pos-left', $(element).offset().left);
    this.setAttribute('pos-top', $(element).offset().top);
  })
  declareMovable();
}

function declareMovable() {
  $('.tile').each(function(index, tile) {
    var tileIsLeft  = parseInt($(tile).attr('pos-left')) + 100  == $('.empty').attr('pos-left')
    var tileIsRight = parseInt($(tile).attr('pos-left')) - 100 == $('.empty').attr('pos-left')
    var tileIsAbove = parseInt($(tile).attr('pos-top'))  + 100 == $('.empty').attr('pos-top')
    var tileIsBelow = parseInt($(tile).attr('pos-top'))  - 100 == $('.empty').attr('pos-top')

    var tileIsHorizontal = $(tile).attr('pos-top')  == $('.empty').attr('pos-top')
    var tileIsVertical   = $(tile).attr('pos-left') == $('.empty').attr('pos-left')

    // declare class right movable
    if(tileIsLeft && tileIsHorizontal) {
      $(this).addClass('move-right');
    }
    // declare class left movable
    else if(tileIsRight && tileIsHorizontal) {
      $(this).addClass('move-left');
    }
    // decalre class up movable
    else if(tileIsBelow && tileIsVertical) {
      $(this).addClass('move-up');
    }
    // declare class down movable
    else if(tileIsAbove && tileIsVertical) {
      $(this).addClass('move-down');
    }
  });
}

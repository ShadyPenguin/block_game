$(function() {
  var $tiles = $('#outer-box').children();
  board.startGame($tiles);
});
 
// ______________ Board Stuff _____________
board = {
  tilesArray : [],
 
  startGame : function($el) {
    this.$tiles = $el
    this.addIndex();
    this.size = this.$tiles.length;
    this.generate();
    this.clickMe();
  },

  clickMe : function() {
    $('.tile').on('click', function() {
      var index = $(this).data('index');
      board.tilesArray[Math.floor(index/5)][index%5].toggleStatus();
      board.render();
    })
  },
 
  addIndex : function() {
    this.$tiles.each(function(index) {
      $(this).data('index',index);
    });
  },

  generate : function() {
    var row = [];
    this.$tiles.each(function() {
      if(row.length < 5) {
        row.push(new Tile($(this)));
      } else {
        board.tilesArray.push(row);
        row = [];
        row.push(new Tile($(this)));
      }
    });
    this.tilesArray.push(row);
    this.render();
  },

  // Refactor this to generate map once
  // new function would act recursively to render
  // tiles that are clicked, and the ones touching it
  render : function() {
    $(this.tilesArray).each(function() {
      $(this).each(function() {
        $(this.domElement).removeClass();
        $(this.domElement).addClass("tile "+this.status); 
      })
    })
  }
}

// ______________ Tiles Stuff _____________
function Tile($el) {
  this.domElement = $el
  this.status = this.generateStatus();
}

Tile.prototype.generateStatus = function() {
  return ['on', 'off'][Math.floor(Math.random()*2)]
}

Tile.prototype.toggleStatus = function() {
  if(this.status === 'on') {
    this.status = 'off';
  } else {
    this.status = 'on';
  }
}

// ______________ Helper Functions ____________


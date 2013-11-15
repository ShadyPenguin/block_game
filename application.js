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
      var row = $(this).data('index')[0];
      var col = $(this).data('index')[1];

      board.tilesArray[row][col].toggleTiles(row,col);
      board.render();
    })
  },
 
  addIndex : function() {
    this.$tiles.each(function(index) {
      $(this).data('index',[Math.floor(index/5),index%5]);
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

Tile.prototype.toggleTiles = function(row, col) {
  this.toggleSelf();
  this.toggleUp(row,col);
  this.toggleDown(row,col);
  this.toggleLeft(row,col);
  this.toggleRight(row,col);
}

Tile.prototype.toggleSelf = function() {
  if(this.status === 'on') {
    this.status = 'off';
  } else {
    this.status = 'on';
  }
}

Tile.prototype.toggleUp = function(row, col) {
  if(col>0){
    board.tilesArray[row][col-1].toggleSelf();
  }
}

Tile.prototype.toggleDown = function(row, col) {
  if(col<4){
    board.tilesArray[row][col+1].toggleSelf();
  }
}

Tile.prototype.toggleLeft = function(row, col) {
  if(row>0){
    board.tilesArray[row-1][col].toggleSelf();
  }
}

Tile.prototype.toggleRight = function(row, col) {
  if(row<4){
    board.tilesArray[row+1][col].toggleSelf();
  }
}



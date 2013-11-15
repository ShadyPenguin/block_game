$(function() {
  var $tiles = $('#outer-box').children();
  board.startGame($tiles);
});
 
// ______________ Board Stuff _____________
board = {
  tilesArray : [],
 
  startGame : function($el) {
    this.$tiles = $el
    this.size = this.$tiles.length;
    this.generate();
    this.render();
  },
 
  generate : function() {
    var row = [];
    this.$tiles.each(function() {
      if(row.length < 5) {
        row.push(new Tile);
      } else {
        board.tilesArray.push(row);
        row = [];
        row.push(new Tile);
      }
    });
    this.tilesArray.push(row);
  },

  render : function() {
    for(var i=0;i<this.size;i++) {
      $('#outer-box :nth-child('+i+')').addClass(this.tilesArray[Math.floor(i/5)][i%5].status);
    }
  }
}

// ______________ Tiles Stuff _____________
function Tile() {
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


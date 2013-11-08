$(function() {
  board.startGame();
});

// _____________ Board Stuff _____________
board = {
  tilesArray : [],

  startGame : function() {
    this.generate();
  },

  generate : function() {
    var row = []
    $('#outer-box').children().each(function() {
      if(row.length < 4) {
        row.push(new Tile);
      } else {
        board.tilesArray.push(row);
        row = [];
        row.push(new Tile);
      }
    });
    this.tilesArray.push(row);
    console.log(this.tilesArray)
  },

  render : function() {
    $(this.tilesArray).each(function(index, element) {
      $('#outer-box')
    })
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


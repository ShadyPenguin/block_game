$(function() {
  $('.movable').each(function(index,element) {
    this.setAttribute('identifier', index)

    var left = $(element).offset().left;
    var top = $(element).offset().top;
    var right = left + width
    var bottom = top + height

    totalObjects.push(new movableBox(left, top, right, bottom, index));
  })

  $('.movable').draggable({ containment: "parent",
                            grid: [ 100, 100 ],
                            drag: function(e, ui) {
                              var index = $(this).attr('identifier');
                              // if the box moves update its position
                              // need to figure make this logic only work when it actually moves
                              // not each time you drag it any amount
                              if(ui.position.left===100){
                                totalObjects[index].updatePositionHorizontal(ui.position.left)
                              }
                            }
  });

});

var totalObjects = [];

var width = 98
var height = 98

function movableBox(left, top, right, bottom, index) {
  this.identifier = index
  this.left = left
  this.top = top
  this.right = right
  this.bottom = bottom
}

movableBox.prototype.updatePositionHorizontal = function(left) {
  this.left += left
  // this.top = position.top
  // this.right = this.left + width
  // this.bottom = this.top + height
  console.log(this);
}
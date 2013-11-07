$(function() {
  $('.movable').each(function(index,element) {
    this.setAttribute('identifier', index)
    
    var attrs = {}
    attrs.left = $(element).offset().left;
    attrs.top = $(element).offset().top;
    attrs.right = attrs.left + width
    attrs.bottom = attrs.top + height
    attrs.index = index

    totalObjects.push(new movableBox(attrs));
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

function movableBox(attrs) {
  this.identifier = attrs.index
  this.left = attrs.left
  this.top = attrs.top
  this.right = attrs.right
  this.bottom = attrs.bottom
}

movableBox.prototype.updatePositionHorizontal = function(left) {
  this.left += left
  // this.top = position.top
  // this.right = this.left + width
  // this.bottom = this.top + height
  console.log(this);
}
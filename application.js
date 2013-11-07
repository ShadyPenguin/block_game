$(function() {
  createBoxes();


});

var totalObjects = [];

function createBoxes() {
  $('.movable').each(function(index,element) {
    this.setAttribute('identifier', index);

    var attrs = {};
    attrs.left = $(element).offset().left;
    attrs.top = $(element).offset().top;

    attrs.index = index;

    totalObjects.push(new movableBox(attrs));
  })
}

function movableBox(attrs) {
  this.identifier = attrs.index;
  this.left = attrs.left;
  this.top = attrs.top;

  this.newLeft = this.left;
  this.newTop = this.top;
}

movableBox.prototype.updatePosition = function(left, top) {
  this.newLeft = left + this.left;
  this.newTop = top + this.top;
}
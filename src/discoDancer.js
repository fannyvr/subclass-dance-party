var discoDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function 
  //this.$node = $('<span class="discoDancer"></span>');

};


discoDancer.prototype = Object.create(makeDancer.prototype);
discoDancer.prototype.constructor = discoDancer;
discoDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  var colors = ['black', 'blue', 'pink', 'white', 'green', 'red'];
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   var styleSettings = {
    'background-color': colors[Math.floor(Math.random()*6)],
    'border': '1px',
    'height': '10px',
    'width': '10px'

  };
  this.$node.css(styleSettings);
  this.swap();
};
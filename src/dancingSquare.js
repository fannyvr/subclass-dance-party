var squareDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function 
  //this.$node = $('<span class="discoDancer"></span>');

};


squareDancer.prototype = Object.create(makeDancer.prototype);
squareDancer.prototype.constructor = squareDancer;
squareDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
   var styleSettings = {
    'background-color': 'orange',
    'border-radius': '0px',
    'border': '1px',
    'height': '20px',
    'width': '20px'

  };
  this.$node.css(styleSettings);
  $('span').mouseover(this, function(){  
    $(this).fadeOut(1000);
    $(this).fadeIn(1000);

  });
};
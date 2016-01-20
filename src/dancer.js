// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};
makeDancer.prototype.swap = function(){
  var temp = window.dancers[0];
  if(window.dancers.length > 1){
    for (var i = 1; i < window.dancers.length; i++) {
      if(Math.abs(this.top - window.dancers[i].top) < Math.abs(temp.top - window.dancers[i].top)){
        temp = window.dancers[i];
      }
    };
  }
  var tempTop = this.top;
  console.log(temp);
  this.setPosition(temp.top);
  temp.setPosition(tempTop);

  
};

makeDancer.prototype.step = function(){
  setTimeout(this.step.bind(this) , this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUpDancers = function(){
  var count = 100;
  for(var i = 0; i < window.dancers.length; i++){
    window.dancers[i].setPosition(count,0);
    count +=25;
  }
};






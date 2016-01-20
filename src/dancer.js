// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.linedUp = false;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.step();
};
makeDancer.prototype.swap = function(){
  console.log('hi');
  var temp = window.dancers[0];
  if(window.dancers.length > 1 && !this.linedUp){
    for (var i = 1; i < window.dancers.length; i++) {
      var tempTop = this.top;
      var tempLeft = this.left;
      temp.setPosition(tempTop, tempLeft);
      this.setPosition(this.top, this.left);
      if(Math.abs(this.top - window.dancers[i].top) > 0 && Math.abs(this.top - window.dancers[i].top) < Math.abs(temp.top - window.dancers[i].top)){
        temp = window.dancers[i];
      } 
    };
  }

  
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
    window.dancers[i].linedUp = true;
    window.dancers[i].setPosition(count,0);
    count +=25;
  }
};






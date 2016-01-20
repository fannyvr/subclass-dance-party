describe("discoDancer", function() {

  var discoDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    discoDancer = new makediscoDancer(10, 20, timeBetweenSteps);
    discoDancer.setPosition(discoDancer.top, discoDancer.left);
    //discoDancer.step();

  });



  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(discoDancer, "step");
      expect(discoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(discoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(discoDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("Package", function() {
  describe("calculateByWeight", function() {
    it("returns $50 to ship a package who's weight is between 5 and 20", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 10;
      testPackage.calculateByWeight().should.equal(50); 
    });
    it("returns $10 to ship a package who's weight is between 1 and 5", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 3;
      testPackage.calculateByWeight().should.equal(10);
    });
    it("returns $100 to ship a package who's weight is greater than 20", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 21;
      testPackage.calculateByWeight().should.equal(100);
    });
    it("returns $2 to ship a package who's weight is less than 1", function() {
      var testPackage = Object.create(Package);
      testPackage.weight = 0.5;
      testPackage.calculateByWeight().should.equal(2);
    });
  });
  describe("calculateByDistance", function() {
    it("returns $5 to ship a package less than 20 miles", function() {
      var testPackage = Object.create(Package);
      testPackage.distance = 19;
      testPackage.calculateByDistance().should.equal(5);
    });
    it("returns $20 to ship a package between 20 and 100 miles", function() {
      var testPackage = Object.create(Package);
      testPackage.distance = 30;
      testPackage.calculateByDistance().should.equal(20);
    });
    it("returns $50 to ship a package between 100 and 500 miles", function() {
      var testPackage = Object.create(Package);
      testPackage.distance = 105;
      testPackage.calculateByDistance().should.equal(50);
    });
    it("returns $100 to a ship a package over 500 miles", function() {
      var testPackage = Object.create(Package);
      testPackage.distance = 575;
      testPackage.calculateByDistance().should.equal(100);
    });
  });
  describe("caculateBySpeed", function() {
    it('returns $10 extra to ship a package expedited', function() {
      var testPackage = Object.create(Package);
      testPackage.speed = 2;
      testPackage.calculateBySpeed().should.equal(10);
    });
    it('returns $25 extra to ship a package one day', function() {
      var testPackage = Object.create(Package);
      testPackage.speed = 1;
      testPackage.calculateBySpeed().should.equal(25);
    });
  });
});

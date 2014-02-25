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
});

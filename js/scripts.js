var Package = {

  calculateByWeight: function() {
    if ((this.weight <= 20) && (this.weight > 5)) {
      return 50;
    } else if ((this.weight >= 1) && (this.weight <= 5)) {
      return 10;
    } else if (this.weight > 20) {
      return 100;
    } else {
      return 2;
    }
  },

  calculateByDistance: function() {
    if (this.distance < 20) {
      return 5;
    } else if ((this.distance >= 20) && (this.distance < 100)) {
      return 20;
    } else if ((this.distance >=100) && (this.distance < 500)) {
      return 50;
    } else {
      return 100;
    }
  },

  calculateBySpeed: function() {
    if (this.speed === 2) {
      return 10;
    } else if (this.speed === 1) {
      return 25;
    } else {
      return 0;
    }
  }
};

$(document).ready(function() {
  $("form#package-things").submit(function(event) {
    event.preventDefault();
    var inputtedWeight = parseInt($("input#new-weight").val());
    var inputtedDistance = parseInt($("input#new-distance").val());
    var inputtedSpeed = parseInt($("input#new-speed").val());
    var newPackage = Object.create(Package);
    newPackage.weight = inputtedWeight;
    newPackage.distance = inputtedDistance;
    newPackage.speed = inputtedSpeed;
    console.log(inputtedWeight);
    console.log(inputtedDistance);
    console.log(inputtedSpeed);
    $("#result").text((newPackage.calculateByWeight()) + (newPackage.calculateByDistance()) + (newPackage.calculateBySpeed()));
  });
});

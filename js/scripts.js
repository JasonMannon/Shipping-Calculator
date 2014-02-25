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
  }
};

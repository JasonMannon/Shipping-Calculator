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
  }
};

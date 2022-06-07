

class HoldType {
  static red = new HoldType('red');
  static orange = new HoldType('orange');
  static yellow = new HoldType('yellow');
  static green = new HoldType('green');
  static blue = new HoldType('blue');
  static purple = new HoldType('purple');
  static wild = new HoldType('wild');
  // static _ = this.closeEnum();


  constructor(name) {
    this.name = name;
  }
  toString() {
    return `HoldType.${this.name}`;
  }
}

export default HoldType;
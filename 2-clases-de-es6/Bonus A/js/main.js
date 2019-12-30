'use strict';
class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
  }
}

class Triangle extends Polygon {
  constructor(base, heigth) {
    super(3, base, heigth);
  }
  superArea() {
    return (super.area() / 2);
  }
}


const room1 = new Square(4);
const room2 = new Triangle(3, 4);



console.log(room1.perimeter());
console.log(room1.area());
console.log(room2.perimeter());
console.log(room2.area());
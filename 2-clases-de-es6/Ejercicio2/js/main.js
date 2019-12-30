'use strict';
class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
        return this.side * 4;
    }
    area() {
        return this.side * this.side;
    }

}
const bedroom = new Square(3);
const house = new Square(7);
console.log(bedroom.perimeter());
console.log(house.area());

export default Square;
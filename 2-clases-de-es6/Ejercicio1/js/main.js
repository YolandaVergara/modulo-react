'use strict';
class Square {
    perimeter(side) {
        return side * 4;
    }
    area(side) {
        return side * side;
    }
}
const room = new Square();
const areaRoom = new Square();
console.log(room.perimeter(9));
console.log(areaRoom.area(9));
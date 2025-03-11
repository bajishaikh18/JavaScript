class Vehicle {
    constructor() {
        this.type = "Generic Vehicle";
    }

    describe() {
        console.log(`This is a ${this.type} vehicle`);
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super();
        this.brand = brand;
    }

    describe() {
        super.describe();
        console.log(`This is a ${this.brand} Car.`);
    }
}

const genericVehicle = new Vehicle();
const car = new Car("Tesla");

console.log(genericVehicle.describe());
console.log(car.describe());
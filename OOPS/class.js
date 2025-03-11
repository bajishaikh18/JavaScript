class Car {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }

    start() {
        console.log(this.brand + " is starting");
    }
}

const  car1 = new Car("Tesla", "Red");
const car2 = new Car("Honda", "Blue");

console.log(car1.brand);
console.log(car2.brand);
car1.start();
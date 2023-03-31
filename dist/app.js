"use strict";
class Vehicle {
    // private make:string;
    // private model:string;
    // private year:number;
    // private rented:boolean;
    constructor(_make, _model, _year, _rented) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(value) {
        this._rented = value;
    }
    rent() {
        if (this._rented) {
            return "Sorry, this vehicle is already rented.";
        }
        else {
            let rate = this.rentalRate();
            return "You have rented a vehicle of " + this.make + " " + this.model + " in " + this.year + ". Your rate is " + rate + ".";
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            return `You have returned a vehicle of ${this.make} ${this.model} in ${this.year}.`;
        }
        else {
            return `You have not returned a vehicle of ${this.make} ${this.model} in ${this.year}.`;
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, _numOfdoors, _capacity) {
        super(make, model, year, rented);
        this._numOfdoors = _numOfdoors;
        this._capacity = _capacity;
    }
    get capacity() {
        return this._capacity;
    }
    get numOfdoors() {
        return this._numOfdoors;
    }
    rentalRate() {
        return 50;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented) {
        super(make, model, year, rented);
    }
    rentalRate() {
        return 100;
    }
}
class Bike extends Vehicle {
    constructor(make, model, year, rented) {
        super(make, model, year, rented);
    }
    rentalRate() {
        return 25;
    }
}
const car = new Car("Toyota", "Corolla", 2021, true, 4, 6);
console.log(car.rent());
console.log(car.rentalRate());
console.log(car.return());
const truck = new Truck("TruckModel", "pakistan", 2023, false);
console.log(truck.rentalRate());
console.log(truck.rentalRate());
console.log(truck.return());
const bike = new Bike("Honda", "cd70", 2022, true);
console.log(bike.rent());
console.log(bike.rentalRate());
console.log(bike.return());
//# sourceMappingURL=app.js.map
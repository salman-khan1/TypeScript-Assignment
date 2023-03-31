abstract class Vehicle{
    // private make:string;
    // private model:string;
    // private year:number;
    // private rented:boolean;
    constructor(private _make:string, private _model:string, private _year:number, private _rented:boolean){

    }
   public get make():string{
        return this._make;
    }
    public get model():string{
        return this._model;
    }
    public get year():number{
        return this._year;
    }
    public get rented():boolean{
        return this._rented;
    }

    public set rented(value: boolean) {
        this._rented = value;
      }
      abstract rentalRate():number;

      public rent():string{
        if(this._rented){
            return "Sorry, this vehicle is already rented.";
      }else{
        let rate = this.rentalRate();
        return "You have rented a vehicle of " + this.make + " " + this.model + " in " + this.year + ". Your rate is " + rate + ".";
      }

    }
    public return(): string{
        if(this._rented){
            this._rented = false;
            return `You have returned a vehicle of ${this.make} ${this.model} in ${this.year}.`
        }
        else{
            return `You have not returned a vehicle of ${this.make} ${this.model} in ${this.year}.`
        }
    }
}
class Car extends Vehicle{
    constructor(make:string,model:string,year:number,rented:boolean,private _numOfdoors:number,private _capacity:number){
        super(make,model,year,rented);
    }
    public get capacity():number{
        return this._capacity;
    }
    public get numOfdoors(): number {
        return this._numOfdoors;
      }
    rentalRate(): number {
        return 50;
    }
    
}

class Truck extends Vehicle{
    constructor(make:string,model:string,year:number,rented:boolean){
        super(make,model,year,rented);
    }
    rentalRate(): number {
        return 100;
    }
}

class Bike extends Vehicle{
    constructor(make:string,model:string,year:number,rented:boolean){
        super(make,model,year,rented);
    }
    rentalRate(): number {
        return 25;
    }
}

const car = new Car("Toyota", "Corolla", 2021, true,4,6);
console.log(car.rent());
console.log(car.rentalRate());
console.log(car.return())
const truck=new Truck("TruckModel","pakistan",2023,false)
console.log(truck.rentalRate());
console.log(truck.rentalRate());
console.log(truck.return())
const bike=new Bike("Honda","cd70",2022,true)
console.log(bike.rent())
console.log(bike.rentalRate());
console.log(bike.return())

//parrent Class
class Vehicle{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        return `${this.brand} ${this.model}, Tahun : ${this.year}`;
    }
}
//Child Class1
class Car extends Vehicle {
    constructor(brand, model, year, doors){
        super(brand, model, year);
        this.doors = doors;
    }
    getCarInfo(){
        return`${this.getInfo()}, Pintu :${this.doors}`;
    }
}
//Child Class2
class Motorcycle extends Vehicle{
    constructor(brand, model, year, type){
        super(brand, model, year);
        this.type = type;
    }

    getMotorInfo(){
        return`${this.getInfo()}, Tipe :${this.type}`;
    }
}

let myCar = new Car("Nissan", "Serena", 2017, 4);
console.log(myCar.getCarInfo());

let myMotor = new Motorcycle("Yamaha", "Aerox", 2017, "Sport")
console.log(myMotor.getMotorInfo());

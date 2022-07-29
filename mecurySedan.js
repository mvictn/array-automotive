//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule{

    Constructor(make, model, year, color, mileag){
        super(make, model, year, color, mileag)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
loadPassanger(){

}
start(){
    if(this.fuel>0)
    console.log('car has started');
    return this.started = true;
}
scheduleService(){
   
}
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

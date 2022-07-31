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
loadPassenger(num) {
     if (this.passenger < this.maxPassengers) {
         if ((num + this.passenger) <= this.maxPassengers) {
             this.passenger = num;
            return this.passenger;               
         } else {
             console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

         }
    } else {
         console.log(this.model + " " + this.make + " is full");
     }
}
start(){
    if(this.fuel>0)
    console.log('car has started');
    return this.started == true;
}
scheduleService(){
    if(this.mileage > 3000){
        console.log('time for maintenance')
        return this.scheduleService == true
    }
   
}
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

this.start()
this.loadPassenger(5)
this.scheduleService()
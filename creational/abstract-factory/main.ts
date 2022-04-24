import LuxuryVehicleAbstractFactory from "./vehicle-company/factory/LuxuryVehicleAbstractFactory";
import RegularVehicleAbstractFactory from "./vehicle-company/factory/RegularVehicleAbstractFactory";
import VehicleAbstractFactoryInterface from "./vehicle-company/factory/VehicleAbstractFactoryInterface";
import CarInterface from "./vehicle-company/product/car/CarInterface";
import MotorcycleInterface from "./vehicle-company/product/motorcycle/MotorcycleInterface";

// get car or motorcycle expensive
const factory01: VehicleAbstractFactoryInterface = new LuxuryVehicleAbstractFactory();
// get car or motorcycle cheap
const factory02: VehicleAbstractFactoryInterface = new RegularVehicleAbstractFactory();

const luxuryCar: CarInterface = factory01.getCar();
const regularCar: CarInterface = factory02.getCar();
const regularMotorcycle: MotorcycleInterface = factory02.getMotorcycle();

console.log(luxuryCar);
console.log(regularCar);
console.log(regularMotorcycle);
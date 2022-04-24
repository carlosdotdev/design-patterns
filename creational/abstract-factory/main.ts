import LuxuryVehicleAbstractFactory from "./vehicle-company/factories/LuxuryVehicleAbstractFactory";
import RegularVehicleAbstractFactory from "./vehicle-company/factories/RegularVehicleAbstractFactory";
import VehicleAbstractFactoryInterface from "./vehicle-company/factories/VehicleAbstractFactoryInterface";
import CarInterface from "./vehicle-company/products/cars/CarInterface";
import MotorcycleInterface from "./vehicle-company/products/motorcycles/MotorcycleInterface";

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
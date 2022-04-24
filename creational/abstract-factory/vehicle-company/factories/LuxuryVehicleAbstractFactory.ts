import VehicleAbstractFactory from "./VehicleAbstractFactoryInterface";
import CarInterface from "../products/cars/CarInterface";
import MotorcycleInterface from "../products/motorcycles/MotorcycleInterface";
import Car from "../products/cars/Car";
import Motorcycle from "../products/motorcycles/Motorcycle";

class LuxuryVehicleAbstractFactory implements VehicleAbstractFactory {
  getCar(): CarInterface {
    return new Car("Ferrari");
  }
  getMotorcycle(): MotorcycleInterface {
    return new Motorcycle("Yamaha");
  }
}

export default LuxuryVehicleAbstractFactory;
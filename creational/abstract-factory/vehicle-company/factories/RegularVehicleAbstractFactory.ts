import Car from "../products/cars/Car";
import CarInterface from "../products/cars/CarInterface";
import Motorcycle from "../products/motorcycles/Motorcycle";
import MotorcycleInterface from "../products/motorcycles/MotorcycleInterface";
import VehicleAbstractFactory from "./VehicleAbstractFactoryInterface";

class RegularVehicleAbstractFactory implements VehicleAbstractFactory {
  getCar(): CarInterface {
    return new Car("Subaru");
  }
  getMotorcycle(): MotorcycleInterface {
    return new Motorcycle("Ducati Monster 696");
  }
}

export default RegularVehicleAbstractFactory;
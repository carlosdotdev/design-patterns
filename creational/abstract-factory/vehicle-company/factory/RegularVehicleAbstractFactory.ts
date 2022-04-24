import Car from "../product/car/Car";
import CarInterface from "../product/car/CarInterface";
import Motorcycle from "../product/motorcycle/Motorcycle";
import MotorcycleInterface from "../product/motorcycle/MotorcycleInterface";
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
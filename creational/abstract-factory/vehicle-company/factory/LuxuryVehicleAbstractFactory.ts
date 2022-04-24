import VehicleAbstractFactory from "./VehicleAbstractFactoryInterface";
import CarInterface from "../product/car/CarInterface";
import MotorcycleInterface from "../product/motorcycle/MotorcycleInterface";
import Car from "../product/car/Car";
import Motorcycle from "../product/motorcycle/Motorcycle";

class LuxuryVehicleAbstractFactory implements VehicleAbstractFactory {
  getCar(): CarInterface {
    return new Car("Ferrari");
  }
  getMotorcycle(): MotorcycleInterface {
    return new Motorcycle("Yamaha");
  }
}

export default LuxuryVehicleAbstractFactory;
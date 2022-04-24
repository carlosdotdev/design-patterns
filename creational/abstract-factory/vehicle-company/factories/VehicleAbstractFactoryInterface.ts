import CarInterface from "../products/cars/CarInterface";
import MotorcycleInterface from "../products/motorcycles/MotorcycleInterface";

interface VehicleAbstractFactoryInterface {
  getCar(): CarInterface;
  getMotorcycle(): MotorcycleInterface;
}

export default VehicleAbstractFactoryInterface;
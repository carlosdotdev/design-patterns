import CarInterface from "../product/car/CarInterface";
import MotorcycleInterface from "../product/motorcycle/MotorcycleInterface";

interface VehicleAbstractFactoryInterface {
  getCar(): CarInterface;
  getMotorcycle(): MotorcycleInterface;
}

export default VehicleAbstractFactoryInterface;
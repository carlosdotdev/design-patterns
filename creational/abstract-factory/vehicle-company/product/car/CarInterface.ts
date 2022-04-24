interface CarInterface {
  getName(): string | null;
  getSpeedInKm(): number;
  getAccelerate(): boolean;
  getReduce(): boolean;
  getTurnLeft(): boolean;
  getTurnRight(): boolean;
  getTurnBack(): boolean | null;
  getParkingBrake(): boolean | null;

  setAccelerate(accelerate: boolean): void;
  setReduce(reduce: boolean): void;
  setTurnLeft(turnLeft: boolean): void;
  setTurnRight(turnRight: boolean): void;
  setTurnBack(turnBack: boolean): void;
  setParkingBrake(parkingBrake: boolean): void;
}

export default CarInterface;
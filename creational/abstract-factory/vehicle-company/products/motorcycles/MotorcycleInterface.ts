interface MotorcycleInterface {
  getName(): string | null;
  getSpeedInKm(): number;
  getAccelerate(): boolean;
  getReduce(): boolean;
  getTurnLeft(): boolean;
  getTurnRight(): boolean;

  setAccelerate(accelerate: boolean): void;
  setReduce(reduce: boolean): void;
  setTurnLeft(turnLeft: boolean): void;
  setTurnRight(turnRight: boolean): void;
}

export default MotorcycleInterface;
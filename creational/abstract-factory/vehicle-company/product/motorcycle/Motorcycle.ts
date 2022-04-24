import Vehicle from "../Vehicle";
import MotorcycleInterface from "./MotorcycleInterface";

class Motorcycle extends Vehicle implements MotorcycleInterface {
  constructor(name: string) {
    super();

    this.name = name;
  }

  getName(): string | null {
    return this.name;
  }
  getSpeedInKm(): number {
    return this.speedInKm;
  }
  getAccelerate(): boolean {
    return this.accelerate;
  }
  getReduce(): boolean {
    return this.reduce;
  }
  getTurnLeft(): boolean {
    return this.turnLeft;
  }
  getTurnRight(): boolean {
    return this.turnRight;
  }
  setAccelerate(accelerate: boolean): void {
    this.accelerate = accelerate;
  }
  setReduce(reduce: boolean): void {
    this.reduce = reduce;
  }
  setTurnLeft(turnLeft: boolean): void {
    this.turnLeft = turnLeft;
  }
  setTurnRight(turnRight: boolean): void {
    this.turnRight = turnRight;
  }
}

export default Motorcycle;
import Vehicle from "../Vehicle";
import CarInterface from "./CarInterface";

class Car extends Vehicle implements CarInterface {
  constructor(name: string) {
    super();

    this.name = name;
    this.turnBack = false;
    this.parkingBrake = true;
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
  getTurnBack(): boolean | null {
    return this.turnBack;
  }
  getParkingBrake(): boolean | null {
    return this.parkingBrake;
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
  setTurnBack(turnBack: boolean): void {
    this.turnBack = turnBack;
  }
  setParkingBrake(parkingBrake: boolean): void {
    this.parkingBrake = parkingBrake;
  }
}

export default Car;
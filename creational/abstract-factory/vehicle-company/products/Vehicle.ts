abstract class Vehicle {
  protected name: string | null;
  protected speedInKm: number;
  protected accelerate: boolean;
  protected reduce: boolean;
  protected turnLeft: boolean;
  protected turnRight: boolean;
  protected turnBack: boolean | null;
  protected parkingBrake: boolean | null;

  constructor() {
    this.name = null;
    this.speedInKm = 0;
    this.accelerate = false;
    this.reduce = false;
    this.turnLeft = false;
    this.turnRight = false;
    this.turnBack = null;
    this.parkingBrake = null;
  }
}

export default Vehicle;
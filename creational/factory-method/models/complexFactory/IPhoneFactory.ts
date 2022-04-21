import IPhone from "../IPhone";

abstract class IPhoneFactory {
  public orderIPhone(): IPhone {
    let device: IPhone | null = null;

    device = this.createIPhone();

    device.getHardware();
    device.assemble();
    device.certificates();
    device.pack();

    return device;
  }

  protected abstract createIPhone(): IPhone;
}

export default IPhoneFactory;
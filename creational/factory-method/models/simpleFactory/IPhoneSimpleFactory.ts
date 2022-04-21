import IPhone from "../IPhone";
import IPhoneNameEnum from "../IPhoneNameEnum";
import IPhone11 from "../IPhone11";
import IPhone11Pro from "../IPhone11Pro";
import IPhoneX from "../IPhoneX";
import IPhoneXSMax from "../IPhoneXSMax";

class IPhoneSimpleFactory {

  private constructor() { }

  public static orderIPhone(deviceName: IPhoneNameEnum): IPhone | null {
    let device: IPhone | null = null;

    device = IPhoneSimpleFactory.createIPhone(deviceName);

    if (device != null) {
      device.getHardware();
      device.assemble();
      device.certificates();
      device.pack();
    }

    return device;
  }

  private static createIPhone(deviceName: string): IPhone | null {
    switch (deviceName) {
      case IPhoneNameEnum.IPhone11: return new IPhone11();
      case IPhoneNameEnum.IPhone11Pro: return new IPhone11Pro();
      case IPhoneNameEnum.IPhoneX: return new IPhoneX();
      case IPhoneNameEnum.IPhoneXSMax: return new IPhoneXSMax();
      default: return null;
    }
  }
}

export default IPhoneSimpleFactory;
import IPhone from "../IPhone";
import IPhoneX from "../IPhoneX";
import IPhoneFactory from "./IPhoneFactory";

abstract class IPhoneXFactory extends IPhoneFactory {
  public createIPhone(): IPhone {
    return new IPhoneX();
  }
}

export default IPhoneXFactory;
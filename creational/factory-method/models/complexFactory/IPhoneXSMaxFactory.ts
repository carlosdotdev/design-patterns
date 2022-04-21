import IPhone from "../IPhone";
import IPhoneXSMax from "../IPhoneXSMax";
import IPhoneFactory from "./IPhoneFactory";

abstract class IPhoneXSMaxFactory extends IPhoneFactory {
  public createIPhone(): IPhone {
    return new IPhoneXSMax();
  }
}

export default IPhoneXSMaxFactory;
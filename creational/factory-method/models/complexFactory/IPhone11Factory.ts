import IPhone from "../IPhone";
import IPhone11 from "../IPhone11";
import IPhoneFactory from "./IPhoneFactory";

abstract class IPhone11Factory extends IPhoneFactory {
  public createIPhone(): IPhone {
    return new IPhone11();
  }
}

export default IPhone11Factory;
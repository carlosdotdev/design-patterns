import IPhone from "../IPhone";
import IPhone11Pro from "../IPhone11Pro";
import IPhoneFactory from "./IPhoneFactory";

class IPhone11ProFactory extends IPhoneFactory {
  public createIPhone(): IPhone {
    return new IPhone11Pro();
  }
}

export default IPhone11ProFactory;
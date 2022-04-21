import IPhoneNameEnum from "./models/IPhoneNameEnum";
import IPhoneSimpleFactory from "./models/simpleFactory/IPhoneSimpleFactory";

import IPhoneFactory from "./models/complexFactory/IPhoneFactory";
import IPhone11ProFactory from "./models/complexFactory/IPhone11ProFactory";

// Using Simple Factory Method
IPhoneSimpleFactory.orderIPhone(IPhoneNameEnum.IPhoneX);

console.log("\n\n");

// Using Complex Factory Method
const iphone11ProFactory: IPhoneFactory = new IPhone11ProFactory();
iphone11ProFactory.orderIPhone();
import Member from "./models/Member";
import SmithFamily from "./models/SmithFamily";

const firstObj = SmithFamily.getInstance();
const secondObj = SmithFamily.getInstance();

console.log(firstObj);

const newMember = new Member("Wanessa");

firstObj.addMember(newMember);

console.log(secondObj);
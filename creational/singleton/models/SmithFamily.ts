import Member from "./Member";

class SmithFamily {
  private members: Array<Member> = [];
  private static instance: SmithFamily = new SmithFamily();

  constructor() {
    const namesArr: Array<string> = ["Ana", "Helena", "Pamela"];

    namesArr.forEach((name: string): void => {
      this.members.push(new Member(name));
    });
  }

  public static getInstance(): SmithFamily {
    return SmithFamily.instance;
  }

  public getMembers(): Array<Member> {
    return this.members;
  }

  public getMemberByIndex(index: number): Member | null {
    const check01 = this.members.length > 0;
    const check02 = index <= (this.members.length - 1);
    const check03 = index > 0;

    return (check01 && check02 && check03) ? this.members[index] : null;
  }

  public setMembers(members: Array<Member>): void {
    this.members = members;
  }

  public addMember(member: Member): void {
    this.members.push(member);
  }
}

export default SmithFamily;
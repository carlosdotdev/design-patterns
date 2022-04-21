import Member from "./Member";

class SmithFamily {
  private members: Array<any> = [];
  private static instance = new SmithFamily();

  constructor() {
    this.members.push(new Member("Ana"));
    this.members.push(new Member("Helena"));
    this.members.push(new Member("Pamela"));
  }

  public static getInstance(): SmithFamily {
    return this.instance;
  }

  public getMembers(): Array<Member> {
    return this.members;
  }

  public getMemberByIndex(index: number): Member {
    const check01 = this.members.length > 0;
    const check02 = index > (this.members.length - 1);

    return (check01 && check02) ? this.members[index] : null;
  }

  public setMembers(members: Array<Member>): void {
    this.members = members;
  }

  public addMember(member: Member): void {
    this.members.push(member);
  }
}

export default SmithFamily;
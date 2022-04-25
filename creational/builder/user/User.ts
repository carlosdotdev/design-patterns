import UserAbstract from "./UserAbstract";
import UserInterface from "./UserInterface";

class User extends UserAbstract implements UserInterface {

  constructor(nickName: string | null, fullName: string | null,
    email: string | null, country: string | null) {
    super();

    this.nickName = nickName;
    this.fullName = fullName;
    this.email = email;
    this.country = country;
  }

  getNickName(): string | null {
    return this.nickName;
  }
  getFullNmae(): string | null {
    return this.fullName;
  }
  getEmail(): string | null {
    return this.email;
  }
  getCountry(): string | null {
    return this.country;
  }
  setNickName(nickName: string): void {
    this.nickName = nickName;
  }
  setFullName(fullName: string): void {
    this.fullName = fullName;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  setCountry(country: string): void {
    this.country = country;
  }
}

export default User;
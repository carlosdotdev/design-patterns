import User from "../User";
import UserAbstract from "../UserAbstract";

class UserBuilder extends UserAbstract {

  writeNickName(nickName: string): UserBuilder {
    this.nickName = nickName;

    return this;
  }

  writeFullName(fullName: string): UserBuilder {
    this.fullName = fullName;

    return this;
  }

  writeEmail(email: string): UserBuilder {
    this.email = email;

    return this;
  }

  writeCountry(country: string): UserBuilder {
    this.country = country;

    return this;
  }

  builder(): User {
    return new User(this.nickName, this.fullName, this.email, this.country);
  }
}

export default UserBuilder;
interface UserInterface {
  getNickName(): string | null;
  getFullNmae(): string | null;
  getEmail(): string | null;
  getCountry(): string | null;

  setNickName(nickName: string): void;
  setFullName(fullName: string): void;
  setEmail(email: string): void;
  setCountry(country: string): void;
}

export default UserInterface;
import UserBuilder from "./user/builder/UserBuilder";
import UserInterface from "./user/UserInterface";

// Using fluent
const userBuilder: UserInterface = new UserBuilder()
  .writeNickName("N0Click")
  .writeFullName("Carlos Eduardo dos Santos")
  .writeEmail("carlos10eduardo47@gmail.com")
  .writeCountry("Brazil")
  .builder();

console.log(userBuilder);
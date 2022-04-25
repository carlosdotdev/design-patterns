abstract class UserAbstract {
  protected nickName: string | null;
  protected fullName: string | null;
  protected email: string | null;
  protected country: string | null;

  constructor() {
    this.nickName = null;
    this.fullName = null;
    this.email = null;
    this.country = null;
  }
}

export default UserAbstract;
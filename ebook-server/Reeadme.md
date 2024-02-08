class UserModel {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  updateProfile(name, email) {
    this.name = name;
    this.email = email;
  }
}
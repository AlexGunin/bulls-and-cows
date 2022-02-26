module.exports = class UserDto {
  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.name = model.name;
    this.isActivated = true;
  }
};

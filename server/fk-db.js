const User = require('./models/user');
class FkDb {

  constructor() {
    this.users = [{
      username: "Test 1",
      email: "test1@gmail.com",
      password: "test123"
    },
    {
      username: "Test 2",
      email: "test2@gmail.com",
      password: "test123"
    }]
  }

  async cleadDb() {
    await User.deleteMany({});
  }

  pushDataToDb() {
    this.users.forEach((users) => {
      const user = new User(users);
      user.save();
    })
  }

  seeDb() {
    this.cleadDb();
    this.pushDataToDb();
  }
}

module.exports = FkDb;
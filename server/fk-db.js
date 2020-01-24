const Flat = require('./models/flat');
const User = require('./models/user');
const fakeDbData = require('./data.json');
class FkDb {

  constructor() {
    this.flats = fakeDbData.flats;
    this.users = fakeDbData.users;
  }

  async cleadDb() {
    await User.deleteMany({});
    await Flat.deleteMany({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);
    const user2 = new User(this.users[1]);
    this.flats.forEach((flats) => {
      const newFlat = new Flat(flats);
      newFlat.user = user;

      user.flats.push(newFlat);
      newFlat.save();
    });

    user.save();
    user2.save();
  }

  async seedDb() {
    await this.cleadDb();
    this.pushDataToDb();
  }
}

module.exports = FkDb;
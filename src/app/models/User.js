import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        subject: Sequelize.STRING,
        message: Sequelize.STRING,
      },
      { sequelize }
    );
    return this;
  }
}
export default User;

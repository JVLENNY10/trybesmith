import UsersModels from '../models/users.models';
import IUsers from '../interfaces/users.interface';

class UsersServices {
  private models: UsersModels;

  constructor() {
    this.models = new UsersModels();
  }

  public create = async (user: IUsers): Promise<IUsers> => {
    const newUser = await this.models.create(user);
    return newUser;
  };
}

export default UsersServices;

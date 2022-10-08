import User from '../models/User';
import IUsers from '../interfaces/usersInterface';

class UsersService {
  private userModel: User;

  constructor() {
    this.userModel = new User();
  }

  public create = async (infos: IUsers): Promise<IUsers> => {
    const id = await this.userModel.create(infos);
    return { id, ...infos };
  };
}

export default UsersService;

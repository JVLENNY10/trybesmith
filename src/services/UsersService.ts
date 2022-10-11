import User from '../models/User';
import { ILogin, IUsers } from '../interfaces/usersInterface';

class UsersService {
  private userModel: User;

  constructor() {
    this.userModel = new User();
  }

  public create = async (infos: IUsers): Promise<IUsers> => {
    const newUser = await this.userModel.create(infos);
    return newUser;
  };

  public login = async (infos: ILogin): Promise<ILogin> => {
    const [userLogin] = await this.userModel.login(infos);
    return userLogin;
  };
}

export default UsersService;

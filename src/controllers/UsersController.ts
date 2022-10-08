import { Request, Response } from 'express';
import JwtHelpers from '../helpers/JwtHelpers';
import UsersService from '../services/UsersService';

class UsersController {
  private jwtHelpers: JwtHelpers;

  private usersService: UsersService;

  constructor() {
    this.jwtHelpers = new JwtHelpers();
    this.usersService = new UsersService();
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const infos = req.body;
    const { id, username } = await this.usersService.create(infos);
    const token = this.jwtHelpers.encoder({ id, username });

    return res.status(201).json({ token });
  };
}

export default UsersController;

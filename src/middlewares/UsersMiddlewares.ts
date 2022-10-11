import { Request, Response, NextFunction } from 'express';

import JwtHelpers from '../helpers/JwtHelpers';
import UsersService from '../services/UsersService';
import { IToken } from '../interfaces/usersInterface';

class UsersMiddlewares {
  private jwtHelpers: JwtHelpers;

  private usersService: UsersService;
  
  constructor() {
    this.jwtHelpers = new JwtHelpers();
    this.usersService = new UsersService();
  }

  public checkClasse = (req: Request, res: Response, next: NextFunction) => {
    const { classe } = req.body;

    if (classe === undefined) {
      return res.status(400).json({ message: '"classe" is required' });
    }

    if (typeof classe !== 'string') {
      return res.status(422).json({ message: '"classe" must be a string' });
    }

    if (classe.length < 3) {
      return res.status(422).json({
        message: '"classe" length must be at least 3 characters long',
      });
    }

    next();
  };

  public checkLevel = (req: Request, res: Response, next: NextFunction) => {
    const { level } = req.body;

    if (level === undefined) {
      return res.status(400).json({ message: '"level" is required' });
    }

    if (typeof level !== 'number') {
      return res.status(422).json({ message: '"level" must be a number' });
    }

    if (level <= 0) {
      return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
    }

    next();
  };

  public checkLogin = async (req: Request, res: Response, next: NextFunction) => {
    const infos = req.body;
    const userLogin = await this.usersService.login(infos);

    if (userLogin === undefined) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    next();
  };

  public checkPassword = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (password === undefined) {
      return res.status(400).json({ message: '"password" is required' });
    }

    if (typeof password !== 'string') {
      return res.status(422).json({ message: '"password" must be a string' });
    }

    if (password.length < 8) {
      return res.status(422).json({
        message: '"password" length must be at least 8 characters long',
      });
    }

    next();
  };

  public checkToken = (
    async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
      const token = req.headers.authorization;

      if (token === undefined) {
        return res.status(401).json({ message: 'Token not found' });
      }

      try {
        this.jwtHelpers.decoder(token) as IToken;
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
      }
    }
  );

  public checkUsername = (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;

    if (username === undefined) {
      return res.status(400).json({ message: '"username" is required' });
    }

    if (typeof username !== 'string') {
      return res.status(422).json({ message: '"username" must be a string' });
    }

    if (username.length < 3) {
      return res.status(422).json({
        message: '"username" length must be at least 3 characters long',
      });
    }

    next();
  };
}

export default UsersMiddlewares;

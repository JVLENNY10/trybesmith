import { Request, Response, NextFunction } from 'express';

export const checkUserName = (req: Request, res: Response, next: NextFunction) => {
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

export const checkClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (classe === undefined) {
    return res.status(400).json({ message: '"classe" is required' });
  }

  if (typeof classe !== 'string') {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  if (classe.length < 3) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }

  next();
};

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

export const checkLevel = (req: Request, res: Response, next: NextFunction) => {
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

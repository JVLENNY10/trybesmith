import fs = require('fs');
import dotenv from 'dotenv';
import { Secret, sign } from 'jsonwebtoken';

dotenv.config();

class JwtHelpers {
  private config: object;

  private jwtSecret: string;

  constructor() {
    this.config = { expiresIn: '1d' };
    this.jwtSecret = fs.readFileSync('jwt.key', 'utf-8');
  }

  public encoder = (payload = {}): Secret => sign({ data: payload }, this.jwtSecret, this.config);
}

export default JwtHelpers;
import fs = require('fs');
import { JwtPayload, Secret, sign, verify } from 'jsonwebtoken';

class JwtHelpers {
  private config: object;

  private jwtSecret: string;

  constructor() {
    this.config = { expiresIn: '1d' };
    this.jwtSecret = fs.readFileSync('jwt.key', 'utf-8');
  }

  public decoder = (token: string): string | JwtPayload => verify(token, this.jwtSecret);

  public encoder = (payload = {}): Secret => sign({ data: payload }, this.jwtSecret, this.config);
}

export default JwtHelpers;
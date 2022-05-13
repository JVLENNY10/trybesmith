import dotenv from 'dotenv';
import { sign, Secret } from 'jsonwebtoken';

dotenv.config();
const jwtConfig = { expiresIn: '1d' };

const jwtGenerator = (payload = {}): Secret => (
  sign({ data: payload }, 'jwt-secret-para-o-projeto', jwtConfig)
);

export default jwtGenerator;

import { Pool, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IUsers from '../interfaces/usersInterface';

class User {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (infos: IUsers): Promise<number> => {
    const { username, classe, level, password } = infos;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);
    `, [username, classe, level, password]);

    return insertId;
  };
}

export default User;

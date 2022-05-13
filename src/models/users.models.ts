import { Pool, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import IUsers from '../interfaces/users.interface';

class UsersModels {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (user: IUsers): Promise<IUsers> => {
    const { username, classe, level, password } = user;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)
    `, [username, classe, level, password]);

    return { id: insertId, ...user };
  };
}

export default UsersModels;

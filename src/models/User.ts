import { Pool, ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import { ILogin, IUsers } from '../interfaces/usersInterface';

class User {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public create = async (infos: IUsers): Promise<IUsers> => {
    const { username, classe, level, password } = infos;

    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);
    `, [username, classe, level, password]);

    return { id, ...infos };
  };

  public login = async (infos: ILogin): Promise<ILogin[]> => {
    const { username, password } = infos;

    const [userLogin] = await connection.execute(`
      SELECT id, username, password FROM Trybesmith.Users WHERE username = ? and password = ?;
    `, [username, password]);

    return userLogin as ILogin[];
  };
}

export default User;

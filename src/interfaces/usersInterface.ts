interface ILogin {
  id?: number,
  username: string,
  password: string,
}

interface IUsers {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export { ILogin, IUsers };

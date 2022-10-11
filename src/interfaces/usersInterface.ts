interface ILogin {
  id?: number,
  username: string,
  password: string,
}

interface IToken {
  data: {
    id: number,
    username: string,
  }
}

interface IUsers {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export { ILogin, IToken, IUsers };

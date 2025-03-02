export class User {
  constructor(
    public readonly email: string,
    public readonly iat: number,
    public readonly exp: number,
    public readonly id?: number
  ) {}
}

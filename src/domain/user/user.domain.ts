import { IUserProps } from './user.interfaces';
import { randomUUID } from 'crypto';

export class User {
  constructor(private props: IUserProps) {}

  public static create(props: IUserProps) {
    return new User({ id: randomUUID(), ...props });
  }

  public get id(): string {
    return this.props.id;
  }

  public get email() {
    return this.props.email;
  }

  public get password() {
    return this.props.password;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public set password(pass: string) {
    this.props.password = pass;
  }
}

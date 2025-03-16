import { randomUUID } from 'crypto';
import { IBrandProps } from './brand.interfaces';

export class Brand {
  constructor(private props: IBrandProps) {}

  public static create(props: IBrandProps): Brand {
    return new Brand({ id: randomUUID(), ...props });
  }

  public get id(): string {
    return this.props.id;
  }

  public set id(id: string) {
    this.props.id = id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }
}

import { randomUUID } from 'crypto';
import { ICategoryProps } from './category.interfaces';

export class Category {
  constructor(private readonly props: ICategoryProps) {}

  public static create(props: ICategoryProps): Category {
    return new Category({ id: randomUUID(), ...props });
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }
}

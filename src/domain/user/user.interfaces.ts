export interface IUserProps {
  id?: string;
  email: string;
  password: string;
}

export interface IUserUnmarshalled {
  id: string;
  email: string;
  password: string;
}

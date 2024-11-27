export interface IUser {
  id: string;
  email: string;
  name: string;
  role: {
    id: string;
    type: 'DISCENTE' | 'DOCENTE';
  };
  password: string;
}

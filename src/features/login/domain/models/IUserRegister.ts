export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  role_id: 'DOCENTE' | 'DISCENTE';
}

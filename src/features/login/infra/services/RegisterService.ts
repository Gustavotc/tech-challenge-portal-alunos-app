import api from '@/config/api/Api';
import { IUser } from '../../domain/models/IUser';
import { IUserRegister } from '../../domain/models/IUserRegister';

export const useRegisterService = () => {
  const registerUser = async (register: IUserRegister): Promise<IUser> => {
    const response = await api.post<IUser>('/user', register);
    return response.data;
  };

  return { registerUser };
};

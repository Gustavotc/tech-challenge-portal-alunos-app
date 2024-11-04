import api from '@/config/api/Api';
import { IUserCredentials } from '../../domain/models/IUserCredentials';
import { IUser } from '../../domain/models/IUser';

export const useLoginService = () => {
  const authenticateUser = async (credentials: IUserCredentials): Promise<IUser> => {
    const response = await api.post<IUser>('/auth/login', credentials);
    return response.data;
  };

  return { authenticateUser };
};

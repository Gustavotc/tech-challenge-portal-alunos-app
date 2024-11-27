import api from '@/config/api/Api';
import { IUser } from '@/features/login/domain/models/IUser';

type IUpdateUserBody = {
  id: string;
  name: string;
  email: string;
  role_id: string;
  password: string;
};

type ICreateUserBody = {
  name: string;
  email: string;
  role_id: string;
  password: string;
};

export const useUserService = () => {
  const fetchUsers = async (): Promise<IUser[]> => {
    const response = await api.get<IUser[]>('/user');
    return response.data;
  };

  const fetchUserById = async (userId: string): Promise<IUser> => {
    const response = await api.get<IUser>(`/user/${userId}`);
    return response.data;
  };

  const deleteUser = async (userId: string): Promise<void> => {
    await api.delete<IUser>(`/user/${userId}`);
  };

  const editUser = async (body: IUpdateUserBody): Promise<void> => {
    await api.put<IUser>(`/user/${body.id}`, body);
  };

  const createUser = async (body: ICreateUserBody): Promise<void> => {
    await api.post<IUser>(`/user`, body);
  };

  return { fetchUsers, fetchUserById, deleteUser, editUser, createUser };
};

import { useState } from 'react';
import { IUserCredentials } from '../../domain/models/IUserCredentials';
import api from '@/config/api/Api';

export const useLoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const userCredentials: IUserCredentials = {
      email,
      password,
    };

    const response = await api.post('/auth/login', userCredentials);
    console.log(response.data);
  };

  return { email, password, setEmail, setPassword, handleSignIn };
};

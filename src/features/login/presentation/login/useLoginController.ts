import { useState } from 'react';
import { IUserCredentials } from '../../domain/models/IUserCredentials';
import api from '@/config/api/Api';
import { formLoginSchema, IFormLoginSchema } from '../../domain/schemas/FormLoginSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';

export const useLoginController = () => {
  const [hidePassword, setHidePassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
  });

  const onSubmitSuccess = async (userCredentials: IUserCredentials) => {
    Keyboard.dismiss();

    try {
      formLoginSchema.parse(userCredentials);

      const response = await api.post('/auth/login', userCredentials);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit(onSubmitSuccess);

  const toggleHidePassword = () => {
    setHidePassword((prevState) => !prevState);
  };

  return {
    errors,
    hidePassword,
    control,
    toggleHidePassword,
    handleSignIn: onSubmit,
  };
};

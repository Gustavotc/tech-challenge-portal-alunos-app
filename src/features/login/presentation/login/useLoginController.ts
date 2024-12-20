import { useState } from 'react';
import { IUserCredentials } from '../../domain/models/IUserCredentials';
import { formLoginSchema, IFormLoginSchema } from '../../domain/schemas/FormLoginSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
import { useLoginService } from '../../infra/services/LoginService';
import Toast from 'react-native-root-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export const useLoginController = () => {
  const navigation = useNavigation();

  const [hidePassword, setHidePassword] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginSchema>({
    resolver: zodResolver(formLoginSchema),
  });

  const loginService = useLoginService();
  const { updateUser } = useAuth();

  const onSubmitSuccess = async (userCredentials: IUserCredentials) => {
    Keyboard.dismiss();

    try {
      const user = await loginService.authenticateUser(userCredentials);
      updateUser(user);
    } catch {
      Toast.show('Falha na autenticação, tente novamente!');
    }
  };

  const onSubmit = handleSubmit(onSubmitSuccess);

  const toggleHidePassword = () => {
    setHidePassword((prevState) => !prevState);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return {
    errors,
    hidePassword,
    control,
    toggleHidePassword,
    handleSignIn: onSubmit,
    handleGoBack,
  };
};

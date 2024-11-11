import { useState } from 'react';
import { IUserRegister } from '../../domain/models/IUserRegister';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
import { formRegisterSchema, IFormRegisterSchema } from '../../domain/schemas/FormRegisterSchema';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import { useRegisterService } from '../../infra/services/RegisterService';

export const useRegisterController = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegisterSchema>({
    resolver: zodResolver(formRegisterSchema),
  });

  const registerService = useRegisterService();

  const onSubmitSuccess = async (userRegister: IUserRegister) => {
    Keyboard.dismiss();

    try {
      const user = await registerService.registerUser(userRegister);

      if (user) {
        Toast.show('Usuário criado com sucesso!');
      }
    } catch (error) {
      Toast.show('Falha ao criar usuário, tente novamente!');
    }
  };

  const onSubmit = handleSubmit((data) => {
    const userRegister: IUserRegister = {
      ...data,
      role_id: 'DISCENTE',
    };
    onSubmitSuccess(userRegister);
  });

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
    handleRegister: onSubmit,
    handleGoBack,
  };
};

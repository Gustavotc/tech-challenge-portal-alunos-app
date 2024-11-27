import { RootStackParamList } from '@/routes/Routes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IUserSchema, userSchema } from '../../domain/schemas/userSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserService } from '../../infra/services/UserService';
import Toast from 'react-native-root-toast';

type IUserFormParams = RouteProp<RootStackParamList, 'UserForm'>;
type IUserFormNavigationProps = NativeStackNavigationProp<RootStackParamList, 'UserForm'>;

export const useUserFormController = () => {
  const route = useRoute<IUserFormParams>();
  const navigation = useNavigation<IUserFormNavigationProps>();

  const { fetchUserById, deleteUser, editUser, createUser } = useUserService();

  const [loading, setLoading] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IUserSchema>({ resolver: zodResolver(userSchema) });

  const userId = route.params?.userId;
  const isEditing = !!userId;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onSubmitSuccess = async (formData: IUserSchema) => {
    try {
      setLoading(true);
      if (userId) {
        await editUser({
          id: userId,
          email: formData.email,
          name: formData.name,
          password: formData.password,
          role_id: formData.role,
        });
      } else {
        await createUser({
          email: formData.email,
          name: formData.name,
          password: formData.password,
          role_id: formData.role,
        });
      }

      Toast.show(`Usuário ${isEditing ? 'atualizado' : 'criado'}`);
      navigation.pop();
    } catch {
      Toast.show(`Falha ao ${isEditing ? 'editar' : 'criar'} usuário`);
    } finally {
      setLoading(false);
    }
  };

  const updateInitialValues = async (userId: string) => {
    try {
      const user = await fetchUserById(userId);

      setValue('name', user.name);
      setValue('email', user.email);
      setValue('password', user.password);
      setValue('role', user.role.type);
    } catch {
      Toast.show('Falha ao buscar usuário');
      navigation.pop();
    }
  };

  const handleSave = handleSubmit(onSubmitSuccess);

  const handleDeleteUser = async () => {
    if (!userId) return;

    try {
      await deleteUser(userId);
      Toast.show('Usuário deletado com sucesso');
      navigation.goBack();
    } catch {
      Toast.show('Falha ao deletar usuário');
    }
  };

  useEffect(() => {
    if (!userId) return;

    updateInitialValues(userId);
  }, []);

  return { isEditing, loading, control, errors, handleGoBack, handleSave, handleDeleteUser };
};

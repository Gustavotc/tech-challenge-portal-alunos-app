import { IUser } from '@/features/login/domain/models/IUser';
import { useCallback, useMemo, useState } from 'react';
import Toast from 'react-native-root-toast';
import { useUserService } from '../../infra/services/UserService';
import { CompositeNavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routes/Routes';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '@/routes/Tab.routes';

type IUsersListNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabsParamList, 'Users'>,
  NativeStackNavigationProp<RootStackParamList>
>;

type IUserFilters = 'ALL' | 'DISCENTE' | 'DOCENTE';

const userFilter: IUserFilters[] = ['ALL', 'DISCENTE', 'DOCENTE'];

const getFilterIndex = (value: IUserFilters) => {
  return userFilter.indexOf(value);
};

export const useUsersListController = () => {
  const navigation = useNavigation<IUsersListNavigationProps>();

  const [filter, setFilter] = useState<IUserFilters>('ALL');
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  const filteredUsers = useMemo(() => {
    if (filter === 'ALL') return users;

    return users.filter((user) => user.role.type === filter);
  }, [filter, users]);

  const { fetchUsers } = useUserService();

  const handleChangeFilter = (newValue: number) => {
    setFilter(userFilter[newValue]);
  };

  const updateUsers = async () => {
    try {
      setLoading(true);
      const response = await fetchUsers();
      setUsers(response);
    } catch {
      Toast.show('Falha ao buscar usuários');
    } finally {
      setLoading(false);
    }
  };

  const handleUserPress = (user: IUser) => {
    navigation.navigate('UserForm', { userId: user.id });
  };

  const handleNewUser = () => {
    navigation.navigate('UserForm');
  };

  useFocusEffect(
    useCallback(() => {
      updateUsers();
    }, []),
  );

  return {
    filter,
    filteredUsers,
    loading,
    handleChangeFilter,
    getFilterIndex,
    updateUsers,
    handleUserPress,
    handleNewUser,
  };
};

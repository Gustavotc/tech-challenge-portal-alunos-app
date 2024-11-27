import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './Styles';
import { useUsersListController } from './useUsersListsController';
import { IUser } from '@/features/login/domain/models/IUser';
import { View, Text, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import EmptyUsersList from './components/emptyUsersList/EmptyUsersList';
import Icon from '@/components/icon/Icon';

const UsersList: React.FC = () => {
  const controller = useUsersListController();

  const renderItem = (item: IUser) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => controller.handleUserPress(item)}
        style={{ backgroundColor: 'white', elevation: 2, borderRadius: 4, padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
          <Text style={{ fontWeight: '500' }}>{item.name}</Text>
          <Text>{item.role.type}</Text>
        </View>
        <Text>{item.email}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <Text style={{ fontSize: 22, fontWeight: '500' }}>Gerenciar usuários</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={controller.handleNewUser}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'orange',
            paddingVertical: 4,
            paddingHorizontal: 8,
            alignSelf: 'flex-end',
            borderRadius: 8,
          }}>
          <Text style={{ color: 'white', fontWeight: '700' }}>Novo usuário</Text>
          <Icon name='plus' size={32} color='white' />
        </TouchableOpacity>
      </View>

      <SegmentedControl
        values={['Todos', 'Discente', 'Docente']}
        selectedIndex={controller.getFilterIndex(controller.filter)}
        onChange={(event) => controller.handleChangeFilter(event.nativeEvent.selectedSegmentIndex)}
        style={{ marginBottom: 16, backgroundColor: 'orange' }}
        activeFontStyle={{ color: 'black', fontWeight: '700' }}
      />

      <FlatList
        data={controller.filteredUsers}
        renderItem={({ item }) => renderItem(item)}
        contentContainerStyle={{ flex: 1, gap: 8 }}
        ListEmptyComponent={<EmptyUsersList />}
        refreshControl={
          <RefreshControl
            refreshing={controller.loading}
            onRefresh={controller.updateUsers}
            colors={['orange']}
          />
        }
      />
    </SafeAreaView>
  );
};

export default UsersList;

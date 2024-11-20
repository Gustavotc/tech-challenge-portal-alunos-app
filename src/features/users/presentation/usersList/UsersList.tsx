import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styles from './Styles';
import { useUsersListController } from './useUsersListsController';

const UsersList: React.FC = () => {
  const controller = useUsersListController();

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={['Todos', 'Discente', 'Docente']}
        selectedIndex={controller.filter}
        onChange={(event) => controller.handleChangeFilter(event.nativeEvent.selectedSegmentIndex)}
      />
    </SafeAreaView>
  );
};

export default UsersList;

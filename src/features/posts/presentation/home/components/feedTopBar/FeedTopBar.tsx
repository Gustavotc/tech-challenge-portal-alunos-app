import React from 'react';
import { View, Text, Alert } from 'react-native';
import Icon from '@/components/icon/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routes/Routes';
import { useAuth } from '@/contexts/AuthContext';
import styles from './Styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type IFeedTopBarNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Feed'>;

const FeedTopBar: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<IFeedTopBarNavigationProps>();

  const { user, updateUser } = useAuth();

  const handleCreatePost = () => {
    navigation.navigate('TeacherPosts');
  };

  const handleLogout = () => {
    Alert.alert('Sair', 'Deseja mesmo sair?', [
      {
        text: 'Cancelar',
      },
      {
        text: 'Confirmar',
        onPress: () => updateUser(null),
      },
    ]);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
      <Icon name='account-circle-outline' size={40} />
      <Text style={styles.username}>
        {'Olá,\n'}
        <Text style={[styles.username, { fontWeight: '700' }]}>{user?.name}</Text>
      </Text>

      {user?.role.type === 'DOCENTE' && (
        <Icon
          name='clipboard-plus-outline'
          size={32}
          onPress={handleCreatePost}
          style={{ marginRight: 8 }}
        />
      )}

      <Icon name='exit-to-app' size={32} color='#8d0000' onPress={handleLogout} />
    </View>
  );
};

export default FeedTopBar;

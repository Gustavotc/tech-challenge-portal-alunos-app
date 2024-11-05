import Icon from '@/components/icon/Icon';
import React from 'react';
import { View, Text } from 'react-native';

const EmptyPostsList: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        elevation: 2,
        padding: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Icon name='clipboard-off-outline' size={24} />

      <Text style={{ marginTop: 8 }}>Nenhum post encontrado!</Text>
    </View>
  );
};

export default EmptyPostsList;

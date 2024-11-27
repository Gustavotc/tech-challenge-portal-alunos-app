import React from 'react';
import { View, Text } from 'react-native';

const EmptyUsersList: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 4,
          padding: 24,
          borderRadius: 4,
        }}>
        <Text>Nenhum usuário encontrado</Text>
      </View>
    </View>
  );
};

export default EmptyUsersList;

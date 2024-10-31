import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Login</Text>
      <Button title='Return' onPress={navigation.goBack} />
    </View>
  );
};

export default Login;

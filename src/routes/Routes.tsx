import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Login from '../features/login/presentation/login/Login';
import { useAuth } from '@/contexts/AuthContext';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  const { user, loadingInitialData } = useAuth();

  if (loadingInitialData) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!user ? (
          <Stack.Screen name='Login' component={Login} />
        ) : (
          <Stack.Screen name='Home' component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

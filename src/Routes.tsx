import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './features/login/presentation/login/Login';
import { CreatePost } from './features/post/prensentation/createPost/create-post';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  CreatePost: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CreatePost' component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

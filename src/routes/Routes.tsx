import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../features/login/presentation/login/Login';
import { useAuth } from '@/contexts/AuthContext';
import Register from '@/features/login/presentation/register/Register';
import Home from '@/Home';
import Feed from '@/features/posts/presentation/home/Feed';
import { CreatePost } from '@/features/post/presentation/createPost/create-post';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Feed: undefined;
  PostForm: undefined;
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
          <>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name='Feed' component={Feed} />
            <Stack.Screen name='PostForm' component={CreatePost} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

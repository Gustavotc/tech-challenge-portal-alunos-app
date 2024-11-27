import React from 'react';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../features/login/presentation/login/Login';
import { useAuth } from '@/contexts/AuthContext';
import Register from '@/features/login/presentation/register/Register';
import Home from '@/Home';
import { CreatePost } from '@/features/post/presentation/createPost/create-post';
import TeacherPosts from '@/features/posts/presentation/teacherPosts/TeacherPosts';
import PostDetails from '@/features/post/presentation/postDetails/PostDetails';
import { AppTabs, TabsParamList } from './Tab.routes';
import UserForm from '@/features/users/presentation/userForm/UserForm';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Tabs: NavigatorScreenParams<TabsParamList>;
  PostForm: { postId: string } | undefined;
  TeacherPosts: undefined;
  PostDetails: { postId: string };
  UserForm: { userId: string } | undefined;
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
            <Stack.Screen name='Tabs' component={AppTabs} />
            <Stack.Screen name='PostForm' component={CreatePost} />
            <Stack.Screen name='TeacherPosts' component={TeacherPosts} />
            <Stack.Screen name='PostDetails' component={PostDetails} />
            <Stack.Screen name='UserForm' component={UserForm} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

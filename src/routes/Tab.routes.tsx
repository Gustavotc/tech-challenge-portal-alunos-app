import Icon from '@/components/icon/Icon';
import Feed from '@/features/posts/presentation/home/Feed';
import TeacherPosts from '@/features/posts/presentation/teacherPosts/TeacherPosts';
import UsersList from '@/features/users/presentation/usersList/UsersList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type TabsParamList = {
  Feed: undefined;
  TeacherPosts: undefined;
  Users: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'orange' }}>
      <Tab.Screen
        name='Feed'
        component={Feed}
        options={{
          tabBarIcon: (props) => <Icon size={24} name='home-outline' color={props.color} />,
        }}
      />
      <Tab.Screen
        name='TeacherPosts'
        component={TeacherPosts}
        options={{
          title: 'Meus posts',
          tabBarIcon: (props) => (
            <Icon size={24} name='clipboard-edit-outline' color={props.color} />
          ),
        }}
      />

      <Tab.Screen
        name='Users'
        component={UsersList}
        options={{
          title: 'Usuários',
          tabBarIcon: (props) => (
            <Icon size={24} name='account-multiple-outline' color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

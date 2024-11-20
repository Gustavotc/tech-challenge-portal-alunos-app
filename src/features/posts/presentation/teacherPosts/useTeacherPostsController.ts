import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useFetchTeacherPosts } from '@/features/post/domain/usecases/useFetchTeacherPosts';
import { IPost } from '@/features/post/domain/interfaces/IPost';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routes/Routes';

type ITeacherPostsNavigationProps = NativeStackNavigationProp<RootStackParamList, 'TeacherPosts'>;

export const useTeacherPostsController = () => {
  const navigation = useNavigation<ITeacherPostsNavigationProps>();
  const [posts, setPosts] = useState<IPost[]>([]);

  const { fetchTeacherPosts } = useFetchTeacherPosts();

  const { user } = useAuth();

  const updatePosts = async () => {
    if (!user) return;

    try {
      const response = await fetchTeacherPosts({
        teacherId: user.id,
      });

      setPosts(response);
    } catch {
      Toast.show('Falha ao buscar posts');
    }
  };

  const handlePostPress = (post: IPost) => {
    navigation.navigate('PostForm', {
      postId: post.id,
    });
  };

  useEffect(() => {
    updatePosts();
  }, []);

  return { posts, handlePostPress };
};

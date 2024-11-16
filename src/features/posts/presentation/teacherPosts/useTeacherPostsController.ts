import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useFetchTeacherPosts } from '@/features/post/domain/usecases/useFetchTeacherPosts';
import { IPost } from '@/features/post/domain/interfaces/IPost';
import Toast from 'react-native-root-toast';

export const useTeacherPostsController = () => {
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

  useEffect(() => {
    updatePosts();
  }, []);

  return { posts };
};

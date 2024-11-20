import { RootStackParamList } from '@/routes/Routes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useFetchPostById } from '../../domain/usecases/useFetchPostById';
import Toast from 'react-native-root-toast';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IPost } from '../../domain/interfaces/IPost';

type IPostDetailsNavigationProps = RouteProp<RootStackParamList, 'PostDetails'>;
type IPostDetailsNavigationParams = NativeStackNavigationProp<RootStackParamList, 'PostDetails'>;

export const usePostDetailsController = () => {
  const navigation = useNavigation<IPostDetailsNavigationParams>();
  const route = useRoute<IPostDetailsNavigationProps>();

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost>();

  const { postId } = route.params;

  const { fetchPostById } = useFetchPostById();

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await fetchPostById(postId);
      setPost(response);
    } catch {
      Toast.show('Falha ao buscar post');
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return { loading, post, handleGoBack };
};

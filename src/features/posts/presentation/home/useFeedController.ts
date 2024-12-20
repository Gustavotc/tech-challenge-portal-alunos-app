import { useEffect, useRef, useState } from 'react';
import { usePostService } from '../../infra/services/postService/PostService';
import { CONSTANTS } from '@/constants/Constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routes/Routes';
import { IPost } from '@/features/post/domain/interfaces/IPost';

type IFeedNavigationParams = NativeStackNavigationProp<RootStackParamList, 'Feed'>;

export const useFeedController = () => {
  const navigation = useNavigation<IFeedNavigationParams>();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [search, setSearch] = useState('');

  const currentPage = useRef(1);
  const hasMorePostsToFetch = useRef(true);
  const searchTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { fetchPosts, searchPosts } = usePostService();

  const updatePostsList = async (textFilter?: string) => {
    const postsResponse = textFilter
      ? await searchPosts(textFilter)
      : await fetchPosts(currentPage.current);

    hasMorePostsToFetch.current = postsResponse.length === CONSTANTS.POST_LIST_LIMIT;

    if (currentPage.current === 1) {
      setPosts(postsResponse);
      return;
    }

    setPosts((oldPosts) => [...oldPosts, ...postsResponse]);
  };

  const handleSearch = (text: string) => {
    setSearch(text);

    if (searchTimerRef.current) {
      clearTimeout(searchTimerRef.current);
    }

    searchTimerRef.current = setTimeout(() => {
      currentPage.current = 1;
      updatePostsList(text);
    }, 700);
  };

  const handlePostPress = (post: IPost) => {
    navigation.navigate('PostDetails', {
      postId: post.id,
    });
  };

  const onEndReached = async () => {
    if (!hasMorePostsToFetch.current) return;

    currentPage.current += 1;
    updatePostsList();
  };

  useEffect(() => {
    updatePostsList();
  }, []);

  return { posts, search, handleSearch, onEndReached, handlePostPress };
};

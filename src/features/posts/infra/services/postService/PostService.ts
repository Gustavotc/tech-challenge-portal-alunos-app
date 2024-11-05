import api from '@/config/api/Api';
import { CONSTANTS } from '@/constants/Constants';
import { IPost, IPostJson } from '@/features/posts/domain/models/Post';

export const usePostService = () => {
  const fetchPosts = async (page: number): Promise<IPost[]> => {
    const endpoint = `/post?limit=${CONSTANTS.POST_LIST_LIMIT}&page=${page}`;

    const response = await api.get<IPostJson[]>(endpoint);

    return response.data.map((postJson) => {
      return {
        id: postJson.id,
        title: postJson.title,
        description: postJson.description,
        category: postJson.category,
        user: postJson.user,
        createAt: new Date(postJson.createAt),
        updateAt: new Date(postJson.updateAt),
      };
    });
  };

  const searchPosts = async (text: string) => {
    const endpoint = `/post/search?text=${text}`;

    const response = await api.get<IPostJson[]>(endpoint);

    return response.data.map((postJson) => {
      return {
        id: postJson.id,
        title: postJson.title,
        description: postJson.description,
        category: postJson.category,
        user: postJson.user,
        createAt: new Date(postJson.createAt),
        updateAt: new Date(postJson.updateAt),
      };
    });
  };

  return { fetchPosts, searchPosts };
};

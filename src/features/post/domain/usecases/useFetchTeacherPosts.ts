import { IPost } from '../interfaces/IPost';
import PostRepository from '../../infra/repositories/PostRepository';

type IFetchTeacherPostsResponse = {
  fetchTeacherPosts: (params: IFetchTeacherPostsParams) => Promise<IPost[]>;
};

export type IFetchTeacherPostsParams = {
  teacherId: string;
  page?: number;
};

export const useFetchTeacherPosts = (): IFetchTeacherPostsResponse => {
  const repository = new PostRepository();

  const fetchTeacherPosts = async (params: IFetchTeacherPostsParams) => {
    return repository.fetchTeacherPost(params);
  };

  return {
    fetchTeacherPosts,
  };
};

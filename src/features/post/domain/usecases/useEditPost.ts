import PostRepository from '../../infra/repositories/PostRepository';
import { IEditPost } from '../interfaces/IPost';

export const useEditPost = () => {
  const repository = new PostRepository();

  const editPost = async (post: IEditPost) => {
    await repository.updatePost(post);
  };

  return { editPost };
};

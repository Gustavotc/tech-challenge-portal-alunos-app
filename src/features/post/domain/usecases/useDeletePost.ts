import PostRepository from '../../infra/repositories/PostRepository';

export const useDeletePost = () => {
  const repository = new PostRepository();

  const deletePost = async (postId: string, userId: string) => {
    await repository.deletePost(postId, userId);
  };

  return { deletePost };
};

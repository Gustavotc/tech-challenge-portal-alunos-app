import PostRepository from "../../infra/repositories/PostRepository";
import { ICreatePost } from "../interfaces/IPost";

export const useCreatePost = () => {
  const repository = new PostRepository();

  const createPost = async (post: ICreatePost) => {
    await repository.createPost(post);
  };

  return { createPost };
};

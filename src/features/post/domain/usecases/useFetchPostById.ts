import PostRepository from "../../infra/repositories/PostRepository";

export const useFetchPostById = () => {
  const repository = new PostRepository();

  const fetchPostById = async (id: string) => {
    return repository.fetchPostById(id);
  };

  return { fetchPostById };
};

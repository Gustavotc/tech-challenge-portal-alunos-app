import { useEffect, useState } from "react";
import { IPost } from "../interfaces/IPost";
import PostRepository from "../../infra/repositories/PostRepository";

type IUserFetchPosts = {
  loading: boolean;
  data: IPost[];
};

export type IFetchPostsParams = {
  searchText?: string;
};

export const useFetchPosts = (params: IFetchPostsParams): IUserFetchPosts => {
  const repository = new PostRepository();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = async (params: IFetchPostsParams) => {
    setLoading(true);
    const postsResponse = await repository.fetchPost(params);
    setPosts(postsResponse);
    setLoading(false);
    return postsResponse;
  };

  useEffect(() => {
    fetchPosts(params);
  }, [params.searchText]);

  return {
    loading,
    data: posts,
  };
};

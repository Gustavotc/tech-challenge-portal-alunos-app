import api from '@/config/api/Api';
import { ICreatePost, IEditPost, IPost, IPostJson } from '../../domain/interfaces/IPost';
import { IFetchPostsParams } from '../../domain/usecases/useFetchPosts';
import { IFetchTeacherPostsParams } from '../../domain/usecases/useFetchTeacherPosts';
import PostAdapter from '../adapters/PostAdapter';

export default class PostRepository {
  async fetchPost({ searchText }: IFetchPostsParams): Promise<IPost[]> {
    let endpoint = '/post';
    let query = '?limit=10&page=1';

    if (searchText) {
      endpoint += `/search`;
      query = `?text=${searchText}`;
    }

    try {
      const postsResponse = await api.get<IPostJson[]>(`${endpoint}${query}`);
      const adapter = new PostAdapter();
      return postsResponse.data.map(adapter.toDomain);
    } catch {
      return [];
    }
  }

  async fetchTeacherPost({ teacherId }: IFetchTeacherPostsParams): Promise<IPost[]> {
    const endpoint = '/post/admin';
    const query = `?teacher_id=${teacherId}`;

    try {
      const postsResponse = await api.get<IPostJson[]>(`${endpoint}${query}`);
      const adapter = new PostAdapter();
      return postsResponse.data.map(adapter.toDomain);
    } catch {
      return [];
    }
  }

  async deletePost(postId: string, userId: string) {
    const endpoint = '/post';
    const query = `?post_id=${postId}&user_id=${userId}`;

    await api.delete<IPostJson[]>(`${endpoint}${query}`);
  }

  async createPost(post: ICreatePost) {
    const endpoint = '/post';
    const adapter = new PostAdapter();
    const body = adapter.toJson(post);
    const response = await api.post<IPostJson>(endpoint, body);

    return adapter.toDomain(response.data);
  }

  async fetchPostById(id: string) {
    const endpoint = `/post/${id}`;

    const adapter = new PostAdapter();

    const response = await api.get<IPostJson>(endpoint);

    if (response.status !== 200) {
      throw new Error();
    }

    return adapter.toDomain(response.data);
  }

  async updatePost(post: IEditPost) {
    const endpoint = '/post';
    const adapter = new PostAdapter();

    const response = await api.put(endpoint, post);

    return adapter.toDomain(response.data);
  }
}

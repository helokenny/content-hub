import { apiClient } from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/lib/api/endpoints';

import type { Post } from '../types/post';

export const postService = {
  async getPosts(): Promise<Post[]> {
    const response = await apiClient.get<Post[]>(API_ENDPOINTS.posts);

    return response.data;
  },

  async getPost(id: number): Promise<Post> {
    const response = await apiClient.get<Post>(`${API_ENDPOINTS.posts}/${id}`);

    return response.data;
  },
};

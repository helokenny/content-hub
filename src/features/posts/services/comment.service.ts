import { apiClient } from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/lib/api/endpoints';

import type { Comment } from '../types/comment';

export const commentService = {
  async getComments(postId: number): Promise<Comment[]> {
    const response = await apiClient.get<Comment[]>(API_ENDPOINTS.comments, {
      params: {
        postId,
      },
    });

    return response.data;
  },
};

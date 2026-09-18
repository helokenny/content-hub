import { apiClient } from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/lib/api/endpoints';

import type { User } from '../types/user';

export const userService = {
  async getUser(id: number): Promise<User> {
    const response = await apiClient.get<User>(`${API_ENDPOINTS.users}/${id}`);

    return response.data;
  },
};

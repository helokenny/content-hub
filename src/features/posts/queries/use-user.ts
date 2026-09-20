'use client';

import { useQuery } from '@tanstack/react-query';

import { userService } from '@/features/posts/services/user.service';
import { userKeys } from '@/features/posts/queries/user-keys';

export function useUser(userId: number) {
  return useQuery({
    queryKey: userKeys.detail(userId),
    queryFn: () => userService.getUser(userId),
    enabled: userId > 0,
  });
}

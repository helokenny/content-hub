'use client';

import { useQuery } from '@tanstack/react-query';

import { userQuery } from '../queries/user-queries';

export function useUser(userId: number) {
  return useQuery(userQuery(userId));
}

'use client';

import { useQuery } from '@tanstack/react-query';

import { postQuery } from '../queries/post-queries';

export function usePost(id: number) {
  return useQuery(postQuery(id));
}

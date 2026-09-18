'use client';

import { useQuery } from '@tanstack/react-query';

import { postsQuery } from '../queries/post-queries';

export function usePosts() {
  return useQuery(postsQuery());
}

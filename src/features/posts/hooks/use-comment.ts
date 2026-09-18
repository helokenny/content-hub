'use client';

import { useQuery } from '@tanstack/react-query';

import { commentsQuery } from '../queries/comment-queries';

export function useComments(postId: number) {
  return useQuery(commentsQuery(postId));
}

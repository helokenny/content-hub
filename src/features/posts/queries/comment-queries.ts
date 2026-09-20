import { queryOptions } from '@tanstack/react-query';
import { commentService } from '../services/comment.service';
import { commentKeys } from './comment-keys';

export const commentsQuery = (postId: number) =>
  queryOptions({
    queryKey: commentKeys.list(postId),
    queryFn: () => commentService.getComments(postId),
    enabled: postId > 0,
  });

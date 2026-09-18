import { queryOptions } from '@tanstack/react-query';

import { commentService } from '../services/comment.service';

export const commentsQuery = (postId: number) =>
  queryOptions({
    queryKey: ['comments', 'post', postId],
    queryFn: () => commentService.getCommentsByPostId(postId),
  });

import { queryOptions } from '@tanstack/react-query';

import { postService } from '../services/post.service';

import { postKeys } from './post-keys';

export const postsQuery = () =>
  queryOptions({
    queryKey: postKeys.list(),
    queryFn: postService.getPosts,
  });

export const postQuery = (id: number) =>
  queryOptions({
    queryKey: postKeys.detail(id),
    queryFn: () => postService.getPost(id),
  });

import { postsQuery } from '@/features/posts/queries/post-queries';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import PostsPreview from './posts-preview';

export default async function HomePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(postsQuery());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsPreview />
    </HydrationBoundary>
  );
}

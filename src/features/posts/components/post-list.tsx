'use client';

import { usePosts } from '../hooks/use-posts';

import { PostCard } from './post-card';

export function PostList() {
  const { data: posts, isPending, isError } = usePosts();

  if (isPending) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-48 animate-pulse rounded-xl border bg-gray-100"
          />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h2 className="font-semibold text-red-900">Unable to load posts</h2>

        <p className="mt-1 text-sm text-red-700">
          Something went wrong while loading the posts. Please try again.
        </p>
      </div>
    );
  }

  if (!posts?.length) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <p className="text-gray-500">No posts available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

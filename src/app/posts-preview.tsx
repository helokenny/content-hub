'use client';

import { usePosts } from '@/features/posts/hooks/use-posts';

export default function PostsPreview() {
  const { data, isPending, isError } = usePosts();

  if (isPending) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Unable to load posts.</p>;
  }

  return (
    <main className="mx-auto max-w-4xl space-y-6 px-6 py-12">
      <h1 className="text-3xl font-bold">Posts</h1>

      <div className="space-y-4">
        {data?.slice(0, 10).map((post) => (
          <article key={post.id} className="rounded-lg border p-5">
            <h2 className="font-semibold capitalize">{post.title}</h2>

            <p className="mt-2 text-gray-600">{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

import { PostList } from '@/features/posts/components/post-list';

export default function PostsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-12">
      <header>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Posts
        </h1>

        <p className="mt-2 text-gray-600">
          Browse the latest posts from the content platform.
        </p>
      </header>

      <PostList />
    </main>
  );
}

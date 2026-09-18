import Link from 'next/link';

import type { Post } from '../types/post';
import { ROUTES_LIST } from '@/constants';

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="space-y-6">
      <Link
        href={ROUTES_LIST.posts}
        className="inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        ← Back to posts
      </Link>

      <header className="space-y-4">
        <div className="text-sm text-gray-500">Post #{post.id}</div>

        <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
          {post.title}
        </h1>
      </header>

      <div className="rounded-xl border bg-white p-6">
        <p className="leading-8 whitespace-pre-line text-gray-700">
          {post.body}
        </p>
      </div>

      <div className="text-sm text-gray-500">Author ID: {post.userId}</div>
    </article>
  );
}

import Link from 'next/link';

import { ROUTES_LIST } from '@/constants';
import type { Post } from '@/features/posts/types/post';

import { CommentList } from './comment-list';
import { UserSummary } from './user-summary';

interface PostDetailProps {
  post: Post;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <div className="space-y-10">
      <Link
        href={ROUTES_LIST.posts}
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        ← Back to posts
      </Link>

      <article className="space-y-6">
        <header className="space-y-4">
          <p className="text-sm font-medium text-blue-600">Post #{post.id}</p>

          <h1 className="text-3xl leading-tight font-bold text-gray-900 capitalize sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <p className="text-base leading-8 whitespace-pre-line text-gray-600">
          {post.body}
        </p>
      </article>

      <UserSummary userId={post.userId} />

      <CommentList postId={post.id} />
    </div>
  );
}

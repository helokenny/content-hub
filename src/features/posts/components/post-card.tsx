import Link from 'next/link';

import type { Post } from '../types/post';
import { ROUTES_LIST } from '@/constants';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`${ROUTES_LIST.posts}/${post.id}`} className="block h-full">
      <article className="h-full rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
        <div className="space-y-3">
          <h2 className="line-clamp-1 text-lg leading-6 font-semibold text-gray-900 capitalize">
            {post.id}. {post.title}{' '}
          </h2>
          <p className="line-clamp-1 text-sm leading-6 text-gray-600">
            {' '}
            {post.body}{' '}
          </p>
        </div>
      </article>
    </Link>
  );
}

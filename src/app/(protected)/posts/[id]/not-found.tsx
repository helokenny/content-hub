import { ROUTES_LIST } from '@/constants';
import Link from 'next/link';

export default function PostNotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-sm font-medium text-blue-600">404</p>

      <h1 className="mt-2 text-3xl font-bold text-gray-900">Post not found</h1>

      <p className="mt-3 text-gray-600">
        The post you are looking for does not exist.
      </p>

      <Link
        href={ROUTES_LIST.posts}
        className="mt-6 inline-flex rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
      >
        Back to posts
      </Link>
    </main>
  );
}

import { ROUTES_LIST } from '@/constants';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-12">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-blue-600">ContentHub</p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Explore content.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            A modern content platform built with Next.js, TypeScript, TanStack
            Query and Redux Toolkit.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href={ROUTES_LIST.posts}
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Browse posts
          </Link>

          <Link
            href={ROUTES_LIST.login}
            className="rounded-lg border px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}

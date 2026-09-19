'use client';

import { ROUTES_LIST } from '@/constants';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';

export default function Launch() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="flex gap-3">
      {isAuthenticated ? (
        <Link
          href={ROUTES_LIST.posts}
          className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Browse posts
        </Link>
      ) : (
        <Link
          href={ROUTES_LIST.login}
          className="rounded-lg border px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Sign in
        </Link>
      )}{' '}
    </div>
  );
}

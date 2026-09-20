'use client';

import { useRouter } from 'next/navigation';

import { clearAuthentication } from '@/features/auth/store/auth-slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import Link from 'next/link';
import { AUTH_COOKIE_NAME, ROUTES_LIST } from '@/constants';

export default function DashboardPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <div>Please wait...</div>;
  }

  function handleLogout() {
    document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;

    dispatch(clearAuthentication());

    router.push(ROUTES_LIST.login);
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-6 py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-blue-600">Dashboard</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
            Welcome back{user?.name ? `, ${user.name}` : ''}
          </h1>

          {user?.email && (
            <p className="mt-2 text-sm text-gray-500">{user.email}</p>
          )}
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Sign out
        </button>
      </header>

      <section className="grid gap-5 sm:grid-cols-2">
        <Link
          href={ROUTES_LIST.posts}
          className="rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <h2 className="font-semibold text-gray-900">Browse posts</h2>

          <p className="mt-2 text-sm text-gray-600">
            Explore content from the platform.
          </p>
        </Link>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { setAuthenticatedUser } from '@/features/auth/store/auth-slice';
import { useAppDispatch } from '@/store/hooks';
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE, ROUTES_LIST } from '@/constants';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubmitting(true);

    // this will normally ome from backend API, say upon refresh
    const user = {
      id: 1,
      name: 'ContentHub User',
      email: 'user@contenthub.local',
    };

    document.cookie = `${AUTH_COOKIE_NAME}=${AUTH_COOKIE_VALUE}; path=/; max-age=86400; SameSite=Lax`;

    dispatch(setAuthenticatedUser(user));

    const redirectPath = searchParams.get('redirect');

    // redirect destinations should be constrained to app routes
    const safeRedirect =
      redirectPath?.startsWith('/') && !redirectPath.startsWith('//')
        ? redirectPath
        : ROUTES_LIST.dashboard;

    router.push(safeRedirect);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          required
          className="w-full rounded-lg border px-4 py-3 text-sm transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </button>
    </form>
  );
}

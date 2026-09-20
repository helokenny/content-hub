'use client';

import { ErrorState } from '@/components/shared/error-state';
import { useUser } from '@/features/posts/hooks/use-user';

interface UserSummaryProps {
  userId: number;
}

export function UserSummary({ userId }: UserSummaryProps) {
  const { data: user, isLoading, isError } = useUser(userId);

  if (isLoading) {
    return (
      <section className="rounded-xl border bg-gray-50 p-5">
        <div className="animate-pulse space-y-3">
          <div className="h-5 w-32 rounded bg-gray-200" />
          <div className="h-4 w-48 rounded bg-gray-200" />
          <div className="h-4 w-40 rounded bg-gray-200" />
        </div>
      </section>
    );
  }

  if (isError || !user) {
    return (
      <section className="rounded-xl border bg-gray-50 p-5">
        <ErrorState message="Author information is unavailable." />
      </section>
    );
  }

  return (
    <section className="rounded-xl border bg-gray-50 p-5">
      <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
        Author
      </p>

      <div className="mt-3 space-y-1">
        <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>

        <p className="text-sm text-gray-600">@{user.username}</p>

        <a
          href={`mailto:${user.email}`}
          className="block text-sm text-blue-600 hover:text-blue-700"
        >
          {user.email}
        </a>

        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm text-blue-600 hover:text-blue-700"
        >
          {user.website}
        </a>
      </div>
    </section>
  );
}

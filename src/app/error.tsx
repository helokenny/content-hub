'use client';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error: _error, reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm">
        <div className="space-y-4">
          <p className="text-sm font-medium text-red-600">
            Something went wrong
          </p>

          <h1 className="text-2xl font-bold text-gray-900">
            We couldn&apos;t load this page
          </h1>

          <p className="text-sm leading-6 text-gray-600">
            An unexpected error occurred. You can try again without leaving the
            page.
          </p>

          <button
            type="button"
            onClick={reset}
            className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}

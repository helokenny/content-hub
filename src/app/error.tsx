'use client';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// {error} will not be used because this is user-facing error handling,
// we don't want to display the raw error into the UI.
export default function ErrorPage({ error: _error, reset }: ErrorPageProps) {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Something went wrong</h1>

      <p className="mt-3 text-gray-600">
        We couldn&apos;t load this page. Please try again.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
      >
        Try again
      </button>
    </main>
  );
}

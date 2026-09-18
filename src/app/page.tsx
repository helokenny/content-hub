import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-2xl space-y-6 text-center">
        <div className="space-y-3">
          <p className="text-sm font-medium text-gray-500">ContentHub</p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore content with a modern frontend architecture.
          </h1>

          <p className="text-lg text-gray-600">
            A demonstration of Next.js App Router, TypeScript, TanStack Query,
            Redux Toolkit, and production-quality frontend architecture.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <Link
            href="/posts"
            className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Explore posts
          </Link>

          <Link
            href="/login"
            className="rounded-lg border px-5 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function PostLoading() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 px-6 py-12">
      <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

      <div className="space-y-3">
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        <div className="h-10 w-3/4 animate-pulse rounded bg-gray-200" />
      </div>

      <div className="space-y-3 rounded-xl border p-6">
        <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />
      </div>
    </main>
  );
}

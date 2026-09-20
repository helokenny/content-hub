export default function PostDetailLoading() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="animate-pulse space-y-10">
        <section className="space-y-5">
          <div className="h-4 w-20 rounded bg-gray-200" />

          <div className="h-10 w-3/4 rounded bg-gray-200" />

          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-2/3 rounded bg-gray-200" />
          </div>
        </section>

        <section className="rounded-xl border bg-gray-50 p-5">
          <div className="space-y-3">
            <div className="h-3 w-16 rounded bg-gray-200" />
            <div className="h-5 w-40 rounded bg-gray-200" />
            <div className="h-4 w-48 rounded bg-gray-200" />
          </div>
        </section>

        <section className="space-y-5">
          <div className="h-6 w-28 rounded bg-gray-200" />

          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-xl border bg-white p-5">
              <div className="space-y-3">
                <div className="h-4 w-48 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-5/6 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

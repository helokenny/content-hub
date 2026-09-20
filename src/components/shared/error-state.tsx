interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'We were unable to load this content.',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 p-6">
      <div className="space-y-3">
        <h2 className="font-semibold text-red-900">{title}</h2>

        <p className="text-sm leading-6 text-red-700">{message}</p>

        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-800"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
}

'use client';

import { ErrorState } from '@/components/shared/error-state';
import { useComments } from '../hooks/use-comments';

interface CommentListProps {
  postId: number;
}

export function CommentList({ postId }: CommentListProps) {
  const { data: comments, isLoading, isError } = useComments(postId);

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Comments</h2>

        {!isLoading && comments && (
          <p className="mt-1 text-sm text-gray-500">
            {comments.length} comments
          </p>
        )}
      </div>

      {isLoading && (
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border bg-white p-5"
            >
              <div className="space-y-3">
                <div className="h-4 w-48 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-200" />
                <div className="h-4 w-5/6 rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && <ErrorState message="Comments could not be loaded." />}

      {!isLoading && !isError && comments?.length === 0 && (
        <div className="rounded-xl border bg-gray-50 p-5">
          <p className="text-sm text-gray-500">No comments yet.</p>
        </div>
      )}

      {!isLoading && !isError && comments && comments.length > 0 && (
        <div className="space-y-4">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border bg-white p-5"
            >
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-900">{comment.name}</h3>

                  <a
                    href={`mailto:${comment.email}`}
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    {comment.email}
                  </a>
                </div>

                <p className="text-sm leading-6 text-gray-600">
                  {comment.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

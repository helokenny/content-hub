import { notFound } from 'next/navigation';

import { PostDetail } from '@/features/posts/components/post-detail';
import { postService } from '@/features/posts/services/post.service';

interface PostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isInteger(postId) || postId <= 0) {
    notFound();
  }

  let post;

  try {
    post = await postService.getPost(postId);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <PostDetail post={post} />
    </main>
  );
}

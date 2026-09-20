import { render, screen } from '@testing-library/react';

import { PostCard } from '@/features/posts/components/post-card';
import type { Post } from '@/features/posts/types/post';

const post: Post = {
  id: 1,
  userId: 1,
  title: 'Test post title',
  body: 'This is the body of the test post.',
};

describe('PostCard', () => {
  it('renders the post title and body', () => {
    render(<PostCard post={post} />);

    expect(
      screen.getByRole('heading', {
        name: `${post.id}. ${post.title}`,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(post.body)).toBeInTheDocument();
  });

  it('links to the post detail page', () => {
    render(<PostCard post={post} />);

    expect(
      screen.getByRole('link', { name: /test post title/i }),
    ).toHaveAttribute('href', '/posts/1');
  });
});

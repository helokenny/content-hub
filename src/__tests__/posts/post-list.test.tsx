import { render, screen } from '@testing-library/react';

import { PostList } from '@/features/posts/components/post-list';
import { usePosts } from '@/features/posts/hooks/use-posts';

jest.mock('@/features/posts/hooks/use-posts');

const mockedUsePosts = jest.mocked(usePosts);

describe('PostList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders an error state', () => {
    mockedUsePosts.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as ReturnType<typeof usePosts>);

    render(<PostList />);

    expect(screen.getByText(/Unable to load posts/i)).toBeInTheDocument();
  });

  it('renders posts', () => {
    mockedUsePosts.mockReturnValue({
      data: [
        {
          id: 1,
          userId: 1,
          title: 'First post',
          body: 'First post body',
        },
        {
          id: 2,
          userId: 1,
          title: 'Second post',
          body: 'Second post body',
        },
      ],
      isLoading: false,
      isError: false,
    } as ReturnType<typeof usePosts>);

    render(<PostList />);

    expect(
      screen.getByRole('heading', { name: '1. First post' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: '2. Second post' }),
    ).toBeInTheDocument();
  });
});

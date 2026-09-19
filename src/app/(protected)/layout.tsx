import { cookies } from 'next/headers';

import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE } from '@/constants';
import { AuthBootstrap } from '@/features/auth/components/auth-bootstrap';
import Link from 'next/link';

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(AUTH_COOKIE_NAME)?.value;

  const isAuthenticated = authCookie === AUTH_COOKIE_VALUE;

  if (!isAuthenticated) {
    return null;
  }

  // this will normally ome from backend API, say upon refresh
  const user = {
    id: 1,
    name: 'ContentHub User',
    email: 'user@contenthub.local',
  };

  return (
    <AuthBootstrap user={user}>
      <nav className="color-blue flex gap-8 p-5">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/posts">Posts</Link>
      </nav>
      {children}
    </AuthBootstrap>
  );
}

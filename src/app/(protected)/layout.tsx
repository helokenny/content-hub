import { cookies } from 'next/headers';

import { AuthBootstrap } from '@/features/auth/components/auth-bootstrap';
import { AppShell } from '@/components/layout/app-shell';
import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE } from '@/constants';

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
      <AppShell>{children}</AppShell>
    </AuthBootstrap>
  );
}

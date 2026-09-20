import Link from 'next/link';

import { LogoutButton } from '@/features/auth/components/logout-button';

import { NavLink } from './nav-link';
import { ROUTES_LIST } from '@/constants';

export function AppHeader() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link
            href={ROUTES_LIST.home}
            className="text-lg font-bold tracking-tight text-gray-900"
          >
            ContentHub
          </Link>

          <nav className="hidden items-center gap-1 sm:flex">
            <NavLink href={ROUTES_LIST.dashboard}>Dashboard</NavLink>
            <NavLink href={ROUTES_LIST.posts}>Posts</NavLink>
          </nav>
        </div>

        <LogoutButton />
      </div>

      <nav className="flex gap-1 border-t px-6 py-2 sm:hidden">
        <NavLink href={ROUTES_LIST.dashboard}>Dashboard</NavLink>
        <NavLink href={ROUTES_LIST.posts}>Posts</NavLink>
      </nav>
    </header>
  );
}

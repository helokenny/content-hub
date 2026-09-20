'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES_LIST } from '@/constants';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === ROUTES_LIST.dashboard
      ? pathname === href
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={
        isActive
          ? 'rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900'
          : 'rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900'
      }
    >
      {children}
    </Link>
  );
}

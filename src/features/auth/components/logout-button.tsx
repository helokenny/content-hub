'use client';

import { useRouter } from 'next/navigation';

import { clearAuthentication } from '@/features/auth/store/auth-slice';
import { useAppDispatch } from '@/store/hooks';
import { AUTH_COOKIE_NAME, ROUTES_LIST } from '@/constants';

export function LogoutButton() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleLogout() {
    document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;

    dispatch(clearAuthentication());
    router.push(ROUTES_LIST.login);
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900"
    >
      Sign out
    </button>
  );
}

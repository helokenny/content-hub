import { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE } from '@/constants';

export function isAuthenticatedCookie(value?: string) {
  return value === AUTH_COOKIE_VALUE;
}

export { AUTH_COOKIE_NAME, AUTH_COOKIE_VALUE };

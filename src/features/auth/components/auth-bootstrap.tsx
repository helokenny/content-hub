'use client';

import { useEffect } from 'react';

import { setAuthenticatedUser } from '@/features/auth/store/auth-slice';
import type { AuthUser } from '@/features/auth/types/auth-user';
import { useAppDispatch } from '@/store/hooks';

interface AuthBootstrapProps {
  user: AuthUser;
  children: React.ReactNode;
}

export function AuthBootstrap({ user, children }: AuthBootstrapProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAuthenticatedUser(user));
  }, [dispatch, user]);

  return children;
}

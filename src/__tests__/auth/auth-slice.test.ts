import authReducer, {
  clearAuthentication,
  setAuthenticatedUser,
} from '@/features/auth/store/auth-slice';

describe('authSlice', () => {
  it('starts unauthenticated', () => {
    const state = authReducer(undefined, { type: 'unknown' });

    expect(state).toEqual({
      user: null,
      isAuthenticated: false,
    });
  });

  it('authenticates a user', () => {
    const user = {
      id: 1,
      name: 'ContentHub User',
      email: 'user@contenthub.local',
    };

    const state = authReducer(undefined, setAuthenticatedUser(user));

    expect(state.user).toEqual(user);
    expect(state.isAuthenticated).toBe(true);
  });

  it('clears authentication', () => {
    const user = {
      id: 1,
      name: 'ContentHub User',
      email: 'user@contenthub.local',
    };

    const authenticatedState = authReducer(
      undefined,
      setAuthenticatedUser(user),
    );

    const state = authReducer(authenticatedState, clearAuthentication());

    expect(state).toEqual({
      user: null,
      isAuthenticated: false,
    });
  });
});

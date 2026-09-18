import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthUser {
  id: number;
  email: string;
  name: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearAuthentication: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAuthenticatedUser, clearAuthentication } = authSlice.actions;

export default authSlice.reducer;

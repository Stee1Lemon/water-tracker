import { createSlice } from '@reduxjs/toolkit';
import authApi from './authOperations';
import {
  handleDeleteUser,
  handleEditUser,
  // handleForgotPass,
  handleLogout,
  // handleRefreshFulfiled,
  // handleRefreshPending,
  // handleRefreshRejected,
  handleSignin,
  handleUpdateAvatar,
  handleUserInfo,
  // handleVerifyPass,
  handleWaterRate,
} from './handlers';

export const initialState = {
  user: {
    email: '',
    name: '',
    gender: '',
    avatarURL: '',
    waterRate: 0,
    verify: '',
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authApi.signupThunk.fulfilled)
      .addCase(authApi.signinThunk.fulfilled, handleSignin)
      .addCase(authApi.getUserThunk.fulfilled, handleUserInfo)
      .addCase(authApi.logoutThunk.pending, handleLogout)
      .addCase(authApi.sendEmailVerifyThunk.fulfilled)
      .addCase(authApi.editUserInfoThunk.fulfilled, handleEditUser)
      .addCase(authApi.updateAvatarThunk.fulfilled, handleUpdateAvatar)
      .addCase(authApi.deleteUserThunk.pending, handleDeleteUser)
      .addCase(authApi.waterRateThunk.fulfilled, handleWaterRate)
      .addCase(authApi.verifyPasswordThunk.fulfilled)
      .addCase(authApi.forgotPassThunk.fulfilled);
  },
});

export const authReducer = authSlice.reducer;

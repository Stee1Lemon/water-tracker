import { initialState } from './authSlice';

export const handleSignin = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleUserInfo = (state, { payload }) => {
  state.user = payload;
};

export const handleLogout = () => initialState;

export const handleDeleteUser = () => initialState;

export const handleEditUser = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};

export const handleUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload.avatarURL;
};

export const handleWaterRate = (state, { payload }) => {
  state.user.waterRate = payload.waterRate;
};


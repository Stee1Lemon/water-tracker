import { initialState } from './authSlice';

// export const handleSignup = (state, { payload }) => {
//     state.user = payload.user;
//     state.token - payload.token;
//     state.isLoggedIn = true;
// };

export const handleSignin = (state, { payload }) => {
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleUserInfo = (state, { payload }) => {
  state.user = payload;
};

export const handleLogout = () => initialState;

export const handleDeleteUser = () => initialState;

// export const handleRefreshFulfiled = (state, { payload }) => {
//   state.user = payload;
//   state.isRefreshing = false;
//   state.isLoggedIn = true;
// };

// export const handleRefreshPending = (state) => {
//   state.isRefreshing = true;
// };

// export const handleRefreshRejected = (state) => {
//   state.isRefreshing = false;
// };

export const handleEditUser = (state, { payload }) => {
  state.user = { ...state.user, ...payload };
};

export const handleUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handleWaterRate = (state, { payload }) => {
  state.user.waterRate = payload.waterRate;
};

export const handleVerifyPass = () => initialState;
export const handleForgotPass = () => initialState;

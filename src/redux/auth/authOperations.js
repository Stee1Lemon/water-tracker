import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  dailyNorm,
  editUserInfo,
  logout,
  refreshUser,
  signin,
  signup,
  updateAvatar,
} from '../../redux/Api/api';

export const signupThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkApi) => {
    try {
      const data = await signup(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkApi) => {
    try {
      const data = await signin(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await logout();
      return;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.token) {
      return thunkApi.rejectWithValue('Something wrong');
    }

    try {
      const data = await refreshUser(auth.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'user/avatar',
  async (photo, thunkApi) => {
    try {
      const avatarURL = await updateAvatar(photo);
      return avatarURL;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const editUserInfoThunk = createAsyncThunk(
  'user/edit',
  async (credentials, thunkApi) => {
    try {
      const data = await editUserInfo(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const dailyNormaThunk = createAsyncThunk(
  'auth/dailynorm',
  async (norm, thunkApi) => {
    try {
      const newNorm = Number(norm) * 1000;
      await dailyNorm(newNorm);
      return newNorm;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

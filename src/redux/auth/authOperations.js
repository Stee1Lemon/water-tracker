import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteUser,
  editUserInfo,
  getUser,
  logout,
  refreshUser,
  signin,
  signup,
  updateAvatar,
  waterRate,
} from '../../redux/Api/api';

const signupThunk = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkApi) => {
    try {
      const data = await signup(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const signinThunk = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkApi) => {
    try {
      const data = await signin(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await logout();
      return;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const { auth } = thunkApi.getState();

    if (!auth.token) {
      return thunkApi.rejectWithValue('Something wrong');
    }

    try {
      const {data} = await refreshUser(auth.token);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const getUserThunk = createAsyncThunk(
  'user/current',
  async (_, thunkApi) => {
    try {
      const data = await getUser();
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.respinse.data.message)
    }
  });


const updateAvatarThunk = createAsyncThunk(
  'user/avatar',
  async (photo, thunkApi) => {
    try {
      const avatarURL = await updateAvatar(photo);
      return avatarURL;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const editUserInfoThunk = createAsyncThunk(
  'user/edit',
  async (credentials, thunkApi) => {
    try {
      const data = await editUserInfo(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const deleteUserThunk = createAsyncThunk(
  'user/delete',
  async (_, thunkApi) => {
    try {
      await deleteUser();
      return;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }  
  }
);

const waterRateThunk = createAsyncThunk(
  'auth/water_rate',
  async (norm, thunkApi) => {
    try {
      const newNorm = Number(norm) * 1000;
      await waterRate(newNorm);
      return newNorm;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const authApi = {
  signupThunk,
  signinThunk,
  logoutThunk,
  refreshUserThunk,
  getUserThunk,
  updateAvatarThunk,
  editUserInfoThunk,
  deleteUserThunk,
  waterRateThunk,
};

export default authApi;
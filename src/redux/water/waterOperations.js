import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWater,
  deleteWater,
  editWater,
  getMonthWater,
  getTodayWater,
} from '../../redux/Api/api';

const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async (credentials, thunkApi) => {
    try {
      const data = await addWater(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const editWaterThunk = createAsyncThunk(
  'water/edit',
  async ({ id, waterAmount, time }, thunkApi) => {
    try {
      const newWater = { waterAmount, time };
      const data = await editWater({ newWater, id });
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const deleteWaterThunk = createAsyncThunk(
  'water/delete',
  async (id, thunkApi) => {
    try {
      await deleteWater(id);
      return id;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const getTodayWaterThunk = createAsyncThunk(
  'water/getTodayWater',
  async (credentials, thunkApi) => {
    try {
      const { data } = await getTodayWater(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const getMonthWaterThunk = createAsyncThunk(
  'water/getMonthWater',
  async (credentials, thunkApi) => {
    try {
      const { data } = await getMonthWater(credentials);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const waterApi = {
  addWaterThunk,
  editWaterThunk,
  deleteWaterThunk,
  getTodayWaterThunk,
  getMonthWaterThunk,
};

export default waterApi;

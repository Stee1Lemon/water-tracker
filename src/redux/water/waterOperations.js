import { createAsyncThunk } from "@reduxjs/toolkit";
import { addWater, deleteWater, editWater, fetchTodayWater } from "../../redux/Api/api";
                                                           //тут теж уточнити роути
export const addWaterThunk = createAsyncThunk('water/addWater', async (credentials, thunkApi) => {
    try {
        const data = await addWater(credentials);
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

export const editWaterThunk = createAsyncThunk('water/edit', async ({ id, waterVolume, date }, thunkApi) => {
    try {
        const newWater = { waterVolume, date };
        const data = await editWater({ newWater, id: id });
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

export const deleteWaterThunk = createAsyncThunk('water/delete', async (id, thunkApi) => {
    try {
        await deleteWater(id);
        return id;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

export const getTodayWater = createAsyncThunk('water/getTodayWAter', async (_, thunkApi) => {
    try {
        const { data } = await fetchTodayWater();
        return data[0];
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

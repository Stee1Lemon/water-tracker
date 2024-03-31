import { createAsyncThunk } from "@reduxjs/toolkit";
import { logout, signin, signup } from "redux/Api/api";

export const signupThunk = createAsyncThunk('auth/signup', async (credentials, thunkApi) => {
    try {
        const data = await signup(credentials);
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

export const signinThunk = createAsyncThunk('auth/signin', async (credentials, thunkApi) => {
    try {
        const data = await signin(credentials);
        return data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
});

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        await logout();
        return;
    } catch (err) {
        return thunkApi.rejectWithValue(err.message);
    }
})
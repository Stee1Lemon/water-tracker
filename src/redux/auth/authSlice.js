import { createSlice } from "@reduxjs/toolkit";
import authApi from "./authOperations";
import { handleLogout, handleSignin } from "./handlers";

export const initialState = {
    user: {
        email: '',
        name: '',
        gender: '',
        avatarURL: '',
        waterRate: 0,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(authApi.signupThunk.fulfilled)
            .addCase(authApi.signinThunk.fulfilled, handleSignin)
            .addCase(authApi.logoutThunk.pending, handleLogout)
    }
});

export const authReducer = authSlice.reducer;
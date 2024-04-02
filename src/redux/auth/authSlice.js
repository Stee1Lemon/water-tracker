import { createSlice } from "@reduxjs/toolkit";
import { logoutThunk, signinThunk, signupThunk } from "./authOperations";
import { handleLogout, handleSignin, handleSignup } from "./handlers";

export const initialState = {
    user: {
        email: '',
        name: '',
        gender: '',
        avatarURL: '',
        dailyNorma: '',
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
            .addCase(signupThunk.fulfilled, handleSignup)
            .addCase(signinThunk.fulfilled, handleSignin)
            .addCase(logoutThunk.fulfilled, handleLogout)
    }
});

export const authReducer = authSlice.reducer;
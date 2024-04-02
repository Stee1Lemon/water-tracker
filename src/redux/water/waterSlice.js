import { createSlice } from "@reduxjs/toolkit";
import { addWaterThunk, editWaterThunk, deleteWaterThunk, getTodayWater } from "./waterOperations";

const initialState = {
    month: [],
    today: {
        dailyWaterList: [],
    }
};

const waterSlice = createSlice({
    name: 'water',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(addWaterThunk.fulfilled,)
            .addCase(editWaterThunk.fulfilled,)
            .addCase(deleteWaterThunk.fulfilled,)
            .addCase(getTodayWater.fulfilled,)
    }
});

export const waterReducer = waterSlice.reducer;
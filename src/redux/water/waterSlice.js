import { createSlice } from "@reduxjs/toolkit";
import waterApi from "./waterOperations";

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
            .addCase(waterApi.addWaterThunk.fulfilled)
            .addCase(waterApi.editWaterThunk.fulfilled)
            .addCase(waterApi.deleteWaterThunk.fulfilled)
            // .addCase(getTodayWater.fulfilled)
            // .addCase(getMonthWater.fulfilled)
    }
});

export const waterReducer = waterSlice.reducer;
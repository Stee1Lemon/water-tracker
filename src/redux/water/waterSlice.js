import { createSlice } from "@reduxjs/toolkit";
import waterApi from "./waterOperations";
import { handleAddWater, handleDeleteWater, handleEditWAter, handleGetToday } from "./handlers";


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
            .addCase(waterApi.addWaterThunk.fulfilled, handleAddWater)
            .addCase(waterApi.editWaterThunk.fulfilled, handleEditWAter)
            .addCase(waterApi.deleteWaterThunk.fulfilled, handleDeleteWater)
            .addCase(waterApi.getTodayWaterThunk.fulfilled, handleGetToday)
            // .addCase(getMonthWater.fulfilled)
    }
});

export const waterReducer = waterSlice.reducer;
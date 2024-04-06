import { createSlice } from "@reduxjs/toolkit";
import waterApi from "./waterOperations";
import { handleAddWater, handleDeleteWater, handleEditWAter, handleGetMonth, handleGetToday } from "./handlers";


const initialState = {
    month: [],
    today: {
        waterList: [],
    },
    
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
            .addCase(waterApi.getMonthWaterThunk.fulfilled, handleGetMonth)
    }
});

export const waterReducer = waterSlice.reducer;
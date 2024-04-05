export const handleAddWater = (state, { payload }) => {
    state.today.dailyWaterList.push(payload);
};

export const handleEditWAter = (state, { payload }) => {
    const arr = state.today.dailyWaterList;
    const index = arr.findIndex(item => item.id === payload.id);
    if (index !== -1) { arr[index] = payload };
    console.log('editWater', state.today.dailyWaterList)
};

export const handleDeleteWater = (state, { payload }) => {
    state.today.dailyWaterList = state.today.dailyWaterList.filter(data => data.id !== payload)
};

export const handleGetToday = (state, { payload }) => {
    state.today = payload;
    console.log('state.today', state.today);
};
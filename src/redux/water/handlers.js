export const handleAddWater = (state, { payload }) => {
    state.today.waterList.push(payload);
};

export const handleEditWAter = (state, { payload }) => {
    const arr = state.today.waterList;
    const index = arr.findIndex(item => item.id === payload.id);
    console.log(arr[index]);
    if (index !== -1) { arr[index] = payload };
    console.log('editWater', state.today.waterList)
};

export const handleDeleteWater = (state, { payload }) => {
    // state.today.dailyWaterList = state.today.dailyWaterList.filter(data => data.id !== payload)
    console.log('delete water handler payload', payload)
};

export const handleGetToday = (state, { payload }) => {
    state.today = payload;
};

export const handleGetMonth = (state, { payload }) => {
    state.month = payload;
}
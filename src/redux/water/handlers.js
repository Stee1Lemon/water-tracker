export const handleAddWater = (state, { payload }) => {
  if (state.today.waterList) {
    state.today.waterList.push(payload.waterData);
  } else {
    state.today.waterList = [payload.waterData];
  }
};

export const handleEditWAter = (state, { payload }) => {
  const arr = state.today.waterList;
  const index = arr.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    arr[index] = payload;
  }
};

export const handleDeleteWater = (state, { payload }) => {
  if (state.today.dailyWaterList)
    state.today.dailyWaterList = state.today.dailyWaterList.filter(
      (data) => data.id !== payload
    );
};

export const handleGetToday = (state, { payload }) => {
  state.today = payload;
};

export const handleGetMonth = (state, { payload }) => {
  state.month = payload;
};

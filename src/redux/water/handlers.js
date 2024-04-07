export const handleAddWater = (state, { payload }) => {
  if (state.today.waterList) {
    state.today.waterList.push(payload.waterData);
  } else {
    state.today.waterList = [payload.waterData];
  }
};

export const handleEditWAter = (state, { payload }) => {
  const arr = state.today.portionsOfWater;
  const index = arr.findIndex((item) => item.id === payload.id);
  if (index !== -1) {
    arr[index] = payload.portionsOfWater;
  }
};

export const handleDeleteWater = (state, { payload }) => {
  if (state.today.portionsOfWater)
    state.today.portionsOfWater = state.today.portionsOfWater.filter(
      (data) => data.id !== payload
    );
};

export const handleGetToday = (state, { payload }) => {
  state.today = payload;
};

export const handleGetMonth = (state, { payload }) => {
  state.month = payload;
};

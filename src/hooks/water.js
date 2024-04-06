
export const getOptions = () => {
  const options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 5) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      const minute = j < 10 ? `0${j}` : `${j}`;
      options.push({
        value: `${hour}:${minute}`,
        label: `${hour}:${minute}`,
      });
    }
  }
  return options;
};

export const getCurrentTime = date => {
  const currentTime = date ? new Date(date) : new Date();
  const minutes = currentTime.getMinutes();
  const roundedMinutes = Math.ceil(minutes / 5) * 5;
  currentTime.setMinutes(roundedMinutes);
  return currentTime;
};
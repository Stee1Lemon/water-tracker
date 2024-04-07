import { format } from 'date-fns';

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

export const getConvertedTime = date => {
  const currentTime = new Date();
  const [hours, minutes] = date.split(':');
  currentTime.setHours(hours, minutes, 0);
  return currentTime;
  // console.log('convertedTime :>> ', currentTime);
};

export const getRoundedMinutes = date => {
  const currentTime = date ? getConvertedTime(date) : new Date();
  const minutes = currentTime.getMinutes();
  const roundedMinutes = Math.ceil(minutes / 5) * 5;
  currentTime.setMinutes(roundedMinutes);
  return format(currentTime, 'HH:mm');
  // return currentTime;
};
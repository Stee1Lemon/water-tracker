import axios from 'axios';
// import { format } from "date-fns";

axios.defaults.baseURL = 'https://watertracker-t8-backend.onrender.com/';

export const setAuthToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

// User-Auth part**********************************

export const signinWithGoogle = async () => {
  const { data } = await axios.get('api/auth/google');
  return data;
};

export const signup = async (body) => {
  const { data } = await axios.post('api/auth/register', body);
  setAuthToken(data.token);
  return data;
};

export const signin = async (body) => {
  const { data } = await axios.post('api/auth/login', body);
  setAuthToken(data.token);
  return data;
};

export const logout = async () => {
  await axios.post('api/auth/logout');
  clearAuthToken();
};

export const sendEmailVerify = async (email) => {
  const { data } = await axios.post('api/auth/verify', email);
  return data;
};

export const refreshUser = async (token) => {
  setAuthToken(token);
  const { data } = await axios.get('api/user/current');
  return data;
};

export const getUser = async () => {
  const { data } = await axios.get('api/user/current');
  return data;
};

export const updateAvatar = async (photo) => {
  const { data } = await axios.patch(
    'api/user/avatars',
    { avatarURL: photo },
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );
  return data;
};

export const editUserInfo = async (body) => {
  const { data } = await axios.put('api/user/current', body);
  return data;
};

export const deleteUser = async () => {
  await axios.delete('api/user');
  clearAuthToken();
};

//additional tasks (password)**********************
export const verifyPassword = async (password) => {
  const { data } = await axios.post('api/user/checkPassword', password);
  return data;
};

export const forgotPassword = async (body) => {
  const { data } = await axios.post('api/auth/forgot-password', body);
  return data;
};

//Water part***************************************

export const waterRate = async (newRate) => {
  const { data } = await axios.patch('api/waters/water_rate', newRate);
  return data;
};

export const addWater = async (water) => {
  const { data } = await axios.post('api/waters', water, {
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};

export const editWater = async ({ newWater, id }) => {
  const { data } = await axios.put(`api/waters/${id}`, newWater, {
    headers: { 'Content-Type': 'application/json' },
  });
  return data;
};

export const deleteWater = async ({ id }) => {
  await axios.delete(`api/waters/${id}`);
};

export const getTodayWater = async (data) => {
  return await axios.get('api/waters/today', { params: data });
};

export const getMonthWater = async (data) => {
  return await axios.get('api/waters/per_month', { params: data });
};

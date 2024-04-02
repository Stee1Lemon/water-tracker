import axios from "axios";
import { format } from "date-fns";

axios.defaults.baseURL = "https://watertracker-t8-backend.onrender.com/";

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = ''
};

// User-Auth part

export const signup = async body => {
    const { data } = await axios.post('api/auth/signup', body);
    setAuthToken(data.token);
    return data;
};

export const signin = async body => {
    const { data } = await axios.post('api/auth/signin', body);
    setAuthToken(data.token);
    return data;
};

export const logout = async () => {
    await axios.post('api/auth/logout');
    clearAuthToken();
};


export const refreshUser = async token => {
    setAuthToken(token);
    const { data } = await axios.get('api/user/current');
    return data;
};

export const updateAvatar = async photo => {
    const { data } = await axios.patch('api/user/avatar', photo);
    return data.avatarURL;
};

export const editUserInfo = async body => {
    const { data } = await axios.patch('api/user/edit', body);
    return data;
};

export const dailyNorm = async norm => {
    const { data } = await axios.patch('api/user/norm', { dailyNorm: norm });    //api/user/norm ????? уточнити маршрути
    return data;
}

//Water part

export const addWater = async water => {
    const { data } = await axios.post('water', water);
    return data;
};

export const editWater = async ({ newWater, id }) => {
    const { data } = await axios.patch(`water/${id}`, newWater);
    return data;
};

export const deleteWater = async id => {
    await axios.delete(`water/${id}`);
};

export const fetchTodayWater = async () => {
    const date = format(new Date(), 'dd-MM-yyyy');
    return await axios.get(`water?date=${date}`);
    
};
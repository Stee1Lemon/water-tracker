import axios from "axios";
// import { format } from "date-fns";

axios.defaults.baseURL = "https://watertracker-t8-backend.onrender.com/";

export const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = ''
};

// User-Auth part**********************************

export const signup = async body => {
    const { data } = await axios.post('api/auth/register', body);
    setAuthToken(data.token);
    return data;
};

export const signin = async body => {
    const { data } = await axios.post('api/auth/login', body);
    setAuthToken(data.token);
    console.log('signin', data);
    return data;
};

export const logout = async () => {
    await axios.post('api/auth/logout');
    clearAuthToken();
};


export const refreshUser = async token => {
    setAuthToken(token);
    const { data } = await axios.get('api/user/current');
    console.log('refresh', data);
    return data;
};

export const getUser = async () => {
    const { data } = await axios.get('api/user/current');
    return data;
}

export const updateAvatar = async photo => {
    const { data } = await axios.patch('api/user/avatars', photo);
    return data.avatarURL;
};

export const editUserInfo = async body => {
    const { data } = await axios.patch('api/user/current', body);
    return data;
};

export const deleteUser = async () => {
    await axios.delete('api/user');
    clearAuthToken();
}

//Water part***************************************

export const waterRate = async norm => {
    const { data } = await axios.patch('api/waters/water_rate', { waterRate: norm }); 
    return data;
};


export const addWater = async water => {
    const { data } = await axios.post('api/waters', water);
    return data;
};

export const editWater = async ({ newWater, id }) => {
    const { data } = await axios.put(`api/waters/${id}`, newWater);
    return data;
};

export const deleteWater = async id => {
    await axios.delete(`api/waters/${id}`);
};

export const getTodayWater = async () => {
    // const date = format(new Date());
    return await axios.get('api/waters/today');
};

export const getMonthWater = async () => {
    return await axios.get('api/waters/per_month');
};

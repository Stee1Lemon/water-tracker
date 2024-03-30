import axios from "axios";

axios.defaults.baseURL = "";

const setAuthToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const clearAuthToken = () => {
    axios.defaults.headers.common.Authorization = ''
};

export const signup = async body => {
    const { data } = await axios.post('auth/signup', body);
    setAuthToken(data.token);
    return data;
};

export const signin = async body => {
    const { data } = await axios.post('/auth/signin', body);
    setAuthToken(data.token);
    return data;
};

export const logout = async () => {
    await axios.post('/auth/logout');
    clearAuthToken();
};


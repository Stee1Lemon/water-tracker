import { initialState } from "./authSlice";

// export const handleSignup = (state, { payload }) => {
//     state.user = payload.user;
//     state.token - payload.token;
//     state.isLoggedIn = true;
// };

export const handleSignin = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

export const handleLogout = () => initialState;

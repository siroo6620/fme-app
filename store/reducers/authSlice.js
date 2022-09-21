import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false
    },
    reducers: {
        login: (state) => {
            state.loggedIn = true
        },
        logout: (state) => {
            state.logout = false
        },
        update: (state, action) => {
            state = action.payload
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer
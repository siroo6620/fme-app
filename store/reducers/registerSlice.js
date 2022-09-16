import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        loggedIn: false,
        farmTypes: [],
        serviceTypes: [],
        countries: []
    },
    reducers: {
        setFarmTypes: (state, action) => {
            state.farmTypes = action.payload
        },
        setServiceTypes: (state, action) => {
            state.serviceTypes = action.payload
        },
        setCountries: (state, action) => {
            state.countries = action.payload
        }
    }
})

export const registerActions = registerSlice.actions

export default registerSlice.reducer
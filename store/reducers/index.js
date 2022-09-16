import { combineReducers } from "@reduxjs/toolkit";
import { reducer as network } from 'react-native-offline'
import authReducer from './authSlice'
import registerReducer from "./registerSlice";

export default combineReducers({
    network,
    auth: authReducer,
    register: registerReducer,
})

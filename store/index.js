import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { createNetworkMiddleware } from 'react-native-offline'
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";
import rootReducer from './reducers'

const persistConfig = {
    key: "root",
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const networkMiddleware = createNetworkMiddleware({
//     actionTypes: [counterActions.add().type, counterActions.addByValue().type],
//     queueReleaseThrottle: 1000
// })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        // .concat(networkMiddleware),
    // middleware: [thunk]
})

export const persistor = persistStore(store)
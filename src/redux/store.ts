import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./services/student";

const store =  configureStore({
    reducer: {
        [studentApi.reducerPath]: studentApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(studentApi.middleware),
})

export default store;
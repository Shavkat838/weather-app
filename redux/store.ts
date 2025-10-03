import { configureStore } from "@reduxjs/toolkit";
import  weatherSlice from "./slices/weatherSlice"
import createSagaMiddleware from "redux-saga";
import mySaga from "./saga/weatherSaga";


const sagaMiddleware=createSagaMiddleware()

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
   middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(mySaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
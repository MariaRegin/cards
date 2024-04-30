import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardsSliceReducer from "./cardsSlice";
import { cardsApi } from "../services/cardsApi";

const rootReducer = combineReducers({
  cardsSliceReducer,
  [cardsApi.reducerPath]: cardsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardsApi.middleware),
  });
};

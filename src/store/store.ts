import { configureStore } from "@reduxjs/toolkit";
// import detailsBookReducer from "./slices/detailsBookReducer";
import favoritesReducer from "./slices/favoriteReducer";
import userReducer from "./slices/UserReducer";
import cardsReducer from "./slices/cardReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoritesReducer,
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
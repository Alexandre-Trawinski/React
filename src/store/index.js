import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const personnagesFavoris = createSlice({
  name: "PersonnageFavoris",
  initialState: [],
  reducers: {
    addFavoris: (state, action) => {
      if (!state.includes(action.payload.name)) {
        state.push(action.payload);
      }
    },
    removeFavoris: (state, action) => {
      return state.filter((it) => it.name !== action.payload);
    },
  },
});

export const { addFavoris, removeFavoris } = personnagesFavoris.actions;

export const store = configureStore({
  reducer: {
    PersonnageFavoris: personnagesFavoris.reducer,
  },
});

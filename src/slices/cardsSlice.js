import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  isLoading: false,
  error: "",
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
});

export default cardsSlice.reducer;

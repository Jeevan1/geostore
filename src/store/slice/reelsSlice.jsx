import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to fetch data from the API using Axios
export const fetchApiData = createAsyncThunk(
  "reels/fetchApiData",
  async (p) => {
    try {
      const response = await axios.get("http://localhost:5174/reels");
      console.log('Data from API:', response.data); // Log the data received
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Define an initial state
const initialState = {
  reels: [],
  loading: false,
  error: "",
};

const reelsSlice = createSlice({
  name: "reels",
  initialState,
  reducers: {
    uniqueReels(state, action) {
      const updatedProduct = state.reels.filter((curElem) => {
        return curElem.category === `men's clothing`;
      });
      alert('dsjd')
      return { ...state, reels: updatedProduct };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.loading = false;
      console.log('djdj');
      state.reels = action.payload;
      state.error = "";
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.loading = false;
      state.reels = [];
      state.error = action.error.message;
    });
  },
});

export default reelsSlice.reducer;

export const {
  uniqueReels,
} = reelsSlice.actions;

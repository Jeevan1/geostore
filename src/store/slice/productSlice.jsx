import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api";
import axios from "axios";

// Define an initial state
const initialState = {
  products: [],
  loading: false,
  error: "",
};

// Define an async thunk to fetch data from the API using Axios
export const fetchApiData = createAsyncThunk(
  "product/fetchApiData",
  async (p) => {
    try {
      const response = await API.get("/products"); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    uniqueProducts(state, action) {
      const updatedProduct = state.filter((curElem) => {
        return curElem.category === `men's clothing`;
      });
      alert('dsjd')
      return (state.products = updatedProduct);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchApiData.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;

export const {
  getProductDetail,
  getAllProducts,
  getUniqueProducts,
  uniqueProducts,
} = productSlice.actions;

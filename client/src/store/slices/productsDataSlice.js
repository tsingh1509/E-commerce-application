import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//read action data from api
export const getData = createAsyncThunk("getData", async () => {
    
    try {
        const response = await axios('https://fakestoreapi.com/products');
        // const data = await response.json();
        console.log(response.data);
        return response.data; // we return data in array.
    } catch (error) {
        return error;
    }
});

//slice
export const productsDataSlice = createSlice({
    name: "productsData",
    initialState: {
        data: [],
        status: "idle",
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
      .addCase(getData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    }

})

export default productsDataSlice.reducer;



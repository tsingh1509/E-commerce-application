import { createSlice } from "@reduxjs/toolkit";;

const productsData = createSlice({
    name: "products",
    initialState: {
        data: null,
        status: "idel"
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload;
            state.status = "success"
        }
    }
});

export const {setProducts} = productsData.actions;
export default productsData.reducer;
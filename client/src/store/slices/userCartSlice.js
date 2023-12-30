import { createSlice } from "@reduxjs/toolkit";


const userCartSlice = createSlice({
    name: "userCart",
    initialState : {
        cartData: [],
        totalOrder: 0,
        // status: "idle",
        // loading: false,
        // error: null,
    },

    reducers:{
        addItem(state, action){
            const id = parseInt(action.payload); // string to integer

            if(!state.cartData.includes(id)){
                state.cartData.push(parseInt(action.payload));
            }
           // state.totalOrder = state.totalOrder + state.totalOrder[parseInt(action.payload)].price;

        },
        deleteItem(state, action){

            state.cartData = state.cartData.filter((item) => item !== action.payload);
            
        },

        updatePrice(state, action){
            console.log("update price called");
        }
    },

});

export const { addItem, deleteItem } = userCartSlice.actions;
export default userCartSlice.reducer;
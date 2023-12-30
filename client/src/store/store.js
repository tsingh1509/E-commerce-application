import {configureStore} from "@reduxjs/toolkit"
import productsDataSlice from "./slices/productsDataSlice";
import userCartSlice from "./slices/userCartSlice";
import userFilterSlice from "./slices/userFilterSlice";
import productsSlice from "./slices/productsSlice";
const store = configureStore({
    reducer: {
        productsData: productsDataSlice,
        cart: userCartSlice,
        filter: userFilterSlice,
        products: productsSlice
    },
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const userFilterSlice = createSlice({
    name: "userFilter",
    initialState: {
        filterData : null,
        isFiltered : "idel"
    },
    reducers: {
        setUserFilters(state, action) {
            state.filterData = action.payload;
            state.isFiltered = "sucess";
        }
    }
});

export const {setUserFilters} = userFilterSlice.actions;
export default userFilterSlice.reducer;
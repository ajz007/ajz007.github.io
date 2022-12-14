import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "fullName":"Ajit Shukla",
    "phone":"+91 7411894934",
    "email":"official.aj.shukla@gmail.com",
    "website":"https://ajz007.github.io",
    "Address":"Navi Mumbai, Maharashtra, India 410218"
}


export const mydetailsSlice = createSlice(
    {
        name:'myDetails',
        initialState,
        reducers:{
            load : (state) => state,
            update : (state, action) => {
                state.myDetails = action.payload;
            }
        }

    }
)

export const { load, update } = mydetailsSlice.actions;
export default mydetailsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import DUMMY_SNEAKERS from "../data/dummySneakers";

const initialState = {
    productList: [],
    DUMMY_SNEAKERS
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        dataControl(state, action) {
            const index = action.payload
            const selectedSneakers = DUMMY_SNEAKERS.find(item => item.id - 1 === index)
            if(selectedSneakers) {  
                state.productList.push(selectedSneakers)
            }
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;
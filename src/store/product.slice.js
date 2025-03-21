import { createSlice } from "@reduxjs/toolkit";
import DUMMY_SNEAKERS from "../data/dummySneakers";

const initialState = {
    favoriteList: [],
    cardList: [],
    DUMMY_SNEAKERS
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        favorite(state, action) {
            const index = action.payload
            const selectedSneakers = DUMMY_SNEAKERS.find(item => item.id - 1 === index)
            if (selectedSneakers && !state.favoriteList.some(item => item.id === selectedSneakers.id)) {
                state.favoriteList.push(selectedSneakers)
            }
        },
        card(state, action) {
            const index = action.payload
            const selectedSneakers = DUMMY_SNEAKERS.find(item => item.id - 1 === index)
            if (selectedSneakers && !state.cardList.some(item => item.id === selectedSneakers.id)) {
                state.cardList.push(selectedSneakers)
            }
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice;
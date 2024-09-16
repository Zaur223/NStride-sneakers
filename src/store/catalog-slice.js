import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedItems: [],
    priceLimit: 2000,
    isCatalogActive: false,
    isPriceActive: false,
}

const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {
        addItems(state, action) {
            state.selectedItems.push(action.payload);
        },
        removeItems(state, action) {
            state.selectedItems = state.selectedItems.filter(item => item !== action.payload);
        },
        catalogToggle(state) {
            state.isCatalogActive = !state.isCatalogActive;
        },
        priceToggle(state) {
            state.isPriceActive = !state.isPriceActive;
        },
        priceChange(state, action) {
            state.priceLimit = action.payload;
        }
    }
})

export const catalogActions = catalogSlice.actions;
export default catalogSlice;
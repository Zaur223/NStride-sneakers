import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHamburgerActive: false,
    isSaleHamburgerClick: false,
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        hamburgerActive(state) {
            state.isHamburgerActive = !state.isHamburgerActive;
        },
        saleHamburgerClick(state) {
            state.isSaleHamburgerClick = !state.isSaleHamburgerClick;
        }
    }
})

export const mainActions = mainSlice.actions;
export default mainSlice;
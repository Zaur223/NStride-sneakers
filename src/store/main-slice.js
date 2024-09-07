import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHamburgerActive: false,
    isSaleHamburgerClick: false,
    isInputActive: false,
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
        },
        inputActive(state) {
            state.isInputActive = !state.isInputActive
        }
    }
})

export const mainActions = mainSlice.actions;
export default mainSlice;
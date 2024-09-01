import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isHamburgerActive: false,
}

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {
        hamburgerActive(state) {
            state.isHamburgerActive = !state.isHamburgerActive;
        }
    }
})

export const mainActions = mainSlice.actions;
export default mainSlice;
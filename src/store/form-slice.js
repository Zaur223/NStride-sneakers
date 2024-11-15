import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    formToggle: false,
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        toggle(state) {
            state.formToggle = !state.formToggle;
        },
        signUpButton(state) {
            state.formToggle = false;
        },
        loginButton(state) {
            state.formToggle = true;
        }
    }
})

export const formActions = formSlice.actions;
export default formSlice;
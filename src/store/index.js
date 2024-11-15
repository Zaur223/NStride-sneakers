import {configureStore} from '@reduxjs/toolkit';
import mainSlice from './main-slice';
import catalogSlice from './catalog-slice';
import formSlice from './form-slice';

const store = configureStore({
    reducer: {
        main: mainSlice.reducer,
        catalog: catalogSlice.reducer,
        form: formSlice.reducer,
    }
})

export default store;
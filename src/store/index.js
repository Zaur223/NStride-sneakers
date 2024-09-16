import {configureStore} from '@reduxjs/toolkit';
import mainSlice from './main-slice';
import catalogSlice from './catalog-slice';

const store = configureStore({
    reducer: {
        main: mainSlice.reducer,
        catalog: catalogSlice.reducer,
    }
})

export default store;
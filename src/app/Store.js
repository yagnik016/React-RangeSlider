import { configureStore } from "@reduxjs/toolkit";

// Import your reducers
import rootReducer from '../reducers/reducers';

const store = configureStore({
    reducer: rootReducer
});

export default store;

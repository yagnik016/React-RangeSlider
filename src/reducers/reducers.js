import data from '../pages/products'
import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    priceRange: [0, 1000],
    products: data, 
};

// Create a slice for managing price range
const priceRangeSlice = createSlice({
    name: 'priceRange',
    initialState,
    reducers: {
        setPriceRange(state, action) {
            state.priceRange = action.payload;
        }
    }
});

// Create a slice for managing products
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        }
    }
});

// Export reducers
export const { setPriceRange } = priceRangeSlice.actions;
export const { setProducts } = productsSlice.actions;

// Combine reducers
const rootReducer = {
    priceRange: priceRangeSlice.reducer,
    products: productsSlice.reducer
};

export default rootReducer;

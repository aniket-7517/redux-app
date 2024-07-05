import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Slices/Products.slice';
import counterReducer from './Slices/Counter.slice';
import userReducer from './Slices/User.slice';
import quotesReducer from './Slices/Quotes.slice';
import postsReducer from './Slices/Posts.slice';
import cartReducer from './Slices/Cart.slice';

const store = configureStore({
    reducer : {
        products : productReducer,
        counters : counterReducer,
        users : userReducer,
        quotes : quotesReducer,
        posts : postsReducer,
        carts : cartReducer,
    }
})

export default store;
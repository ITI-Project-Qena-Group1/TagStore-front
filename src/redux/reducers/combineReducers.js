import { combineReducers } from "@reduxjs/toolkit";
import AllProductsReducer from "./getAllProducts";
import cartReducers from "./productsReducer";

export default combineReducers({
    cart: cartReducers ,
    allProducts: AllProductsReducer
}
)
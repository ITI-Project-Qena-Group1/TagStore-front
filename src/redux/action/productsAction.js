import axios from "axios";

export function addToCart(payload) {
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export function delFromCart(payload) {
    return {
        type: "DEL_FROM_CART",
        payload
    }
}


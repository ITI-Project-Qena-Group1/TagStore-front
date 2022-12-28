export function addToCart(data) {
    return {
        type: "ADD_TO_CART",
        payload: data
    }
}

export function delFromCart(data) {
    return {
        type: "DEL_FROM_CART",
        payload: data
    }
}


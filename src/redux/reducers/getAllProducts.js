const initialValue = {
    list: []
}

export default function AllProductsReducer(state=initialValue, action) {

    switch (action.type) {

        case "GET_ALL_PRODUCTS":
            return { ...state, list: action.payload }
        default:
            return state;
    }
}
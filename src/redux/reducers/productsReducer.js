const initialValue =[];

export default function cartReducers(state = initialValue, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                action.payload
            ]
        case "DEL_FROM_CART":
            state.forEach((item) => {
                if (item.id === action.payload) {
                    let x = state.indexOf(item)
                    state.splice(x,1)
                }
            })
            return state
        default:
            return state;
    }
}

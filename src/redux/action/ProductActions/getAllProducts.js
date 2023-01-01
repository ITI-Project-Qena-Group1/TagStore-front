import { axiosInstance } from "../../../network";
import { productConstants } from  '../../types';


export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/products`);
        console.log(response.data.products)
       
        dispatch({
            type: productConstants.GET_ALL_PRODUCTS,
            payload: response.data.products,
            
        });
    } catch (err) {
        console.log(err);
    }
};
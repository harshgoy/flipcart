import axios from "axios";
import * as actionTypes from "../constants/cartConstants"
const URL="";



export const addToCart=(id,quantity)=> async(dispatch)=>{
    try{
        const {data}=await axios.get(`${URL}/product/${id}`);
        dispatch({type:actionTypes.ADD_TO_CART,payload:{...data,quantity}})

    }catch(error){
        dispatch({type:actionTypes.ADD_TO_CART_ERROR,payload:error})

    }

}

export const removeFromCart=(id)=>(dispatch)=>{
    dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
    
}

export const reduceQuantity =(id)=>(dispatch)=>{
    dispatch({type:actionTypes.REDUCE_QUANTITY,payload:id})
}
export const increaseQuantity =(id)=>(dispatch)=>{
    dispatch({type:actionTypes.INCREASE_QUANTITY,payload:id})
}
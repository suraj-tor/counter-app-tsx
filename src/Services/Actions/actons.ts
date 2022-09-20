import React from "react";
import { ADD_TO_CART, REMOVE_CART } from "../constants";

export const addToCart = (data:any) => {
    return {
        type: ADD_TO_CART,
        data: data,
    };
};

export const removeCart = (data:any) => {
    return {
        type: REMOVE_CART,
        data: data,
    };
};

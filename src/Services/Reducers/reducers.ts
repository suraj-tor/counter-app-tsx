import React from "react";

interface initialStateType {
    cardData: object[];
}

const initialState = {
    cardData: [],
};

const cardItems = (state = initialState, action: { type: string; data: any }) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...StaticRange,
                cardData: action.data,
            };
            break;
        default:
            return state;
    }
};

export default cardItems;
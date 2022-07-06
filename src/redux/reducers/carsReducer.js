import {GET_ALL_CARS, CARS_ERROR} from "../actions/types";

const initialState = {
    cars: [],
    error: null,
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CARS:
            return {
                ...state,
                cars: action.payload,
            };
        case CARS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default carsReducer;

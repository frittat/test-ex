import { SET_ERROR } from "../consts/actionTypes";

type ErrorAction = {
    type: typeof SET_ERROR;
    payload: ErrorType;
};

interface ErrorType {
    errorHeader: string;
    errorText: string;
}

const initialState = {
    errorHeader: "",
    errorText: ""
};

export const reducer = (state: ErrorType = initialState, action: ErrorAction): ErrorType => {
    switch (action.type) {
        case SET_ERROR:
            return { errorHeader: action.payload.errorHeader, errorText: action.payload.errorText };
        default:
            return state;
    }
};

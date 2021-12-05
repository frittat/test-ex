import { SET_ERROR } from "../consts/actionTypes";

const setError = (errorHeader: string, errorText: string) => {
    return { type: SET_ERROR, payload: { errorHeader, errorText } };
};

export { setError };

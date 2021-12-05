import { SET_KEYWORDS, CLEAR_KEYWORDS } from "../consts/actionTypes";

function setKeywords(keywords: string[]) {
    return { type: SET_KEYWORDS, payload: { keywords } };
}

function clearKeywords() {
    return { type: CLEAR_KEYWORDS };
}

export { setKeywords, clearKeywords };

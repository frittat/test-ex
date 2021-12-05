import { SET_KEYWORDS, CLEAR_KEYWORDS } from "../consts/actionTypes";

type ArticleAction = {
    type: typeof SET_KEYWORDS | typeof CLEAR_KEYWORDS;
    payload: ArticleType;
};

interface ArticleType {
    keywords: string[];
}

const initialState = {
    keywords: [""]
};

export const reducer = (state: ArticleType = initialState, action: ArticleAction): ArticleType => {
    switch (action.type) {
        case SET_KEYWORDS:
            return { keywords: action.payload.keywords };
        case CLEAR_KEYWORDS:
            return initialState;
        default:
            return state;
    }
};

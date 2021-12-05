export interface RootState {
    article: {
        keywords: string[];
    };
    error: {
        errorHeader: string;
        errorText: string;
    };
}

import { Box } from "@mui/material";
import Head from "../components/Head";
import { ArticleType } from "../helpers/types/ArticleType";

const Article = (articleData: ArticleType) => {
    // const { width } = useWindowDimensions();
    //
    // const themePrimary = useSelector((state: RootState) => state.theme.primary);
    // const themeSecondary = useSelector((state: RootState) => state.theme.secondary);
    // const themeType = useSelector((state: RootState) => state.theme.type);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", flexWrap: "nowrap" }}>
            <Head title={articleData.title} description={articleData.summary} />
            <img src={articleData.imageUrl} alt={articleData.title} />
            <article></article>
        </Box>
    );
};

export default Article;

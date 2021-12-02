import { Route, Switch } from "react-router-dom";
import Article from "../pages/Article";
import Main from "../pages/Main";
// import { lazy } from "react";
// const ArticleType = lazy(() => import(/* webpackChunkName: "article" */ "../pages/ArticleType"));
// const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ "../pages/NotFound"));
// const Main = lazy(() => import(/* webpackChunkName: "main" */ "../pages/Main"));

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/article/:id" component={Article} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    );
};

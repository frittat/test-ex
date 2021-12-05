import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
const Main = lazy(() => import(/* webpackChunkName: "main" */ "../pages/Main"));
const Article = lazy(() => import(/* webpackChunkName: "article" */ "../pages/Article"));
const NotFound = lazy(() => import(/* webpackChunkName: "notFound" */ "../pages/NotFound"));

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/article" component={Article} />
            <Route component={NotFound} />
        </Switch>
    );
};

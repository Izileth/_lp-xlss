import {
    createBrowserRouter,
} from "react-router";

import Page from "../pages";
import PageSubscription from "../pages/subscription";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Page,
    },
    {
        path: "/subscription",
        Component: PageSubscription,
    }
]);


export default Router
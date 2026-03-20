import {
    createBrowserRouter,
} from "react-router";

import Page from "../pages";
import PageSubscription from "../pages/subscription";
import Lobby from "../pages/lobby";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Page,
    },
    {
        path: "/subscription",
        Component: PageSubscription,
    },
    {
        path: "/lobby",
        Component: Lobby,
    },
]);


export default Router
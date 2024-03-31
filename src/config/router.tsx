import {
    createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/home";
import Airdrop from "../pages/airdrop";
import PageLayout from "../components/PageLayout";

const router = createBrowserRouter([
    {
        id: 'root',
        path: '/',
        Component: PageLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'airdrop',
                Component: Airdrop,
            }
        ]

    }
], {
    basename: '/deplan-airdrop-client/',
});

export default router
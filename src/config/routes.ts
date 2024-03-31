import Home from '../pages/Home';
import Results from '../pages/Results';
import Favorites from '../pages/Favorites';
import { FC } from 'react';

interface RouteType {
    path: string,
    component: FC<{}> | (() => JSX.Element),
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false,
    },
    {
        path: "/favorites",
        component: Favorites,
        name: "Favorites",
        protected: true,
    },
    {
        path: "/search",
        component: Results,
        name: "Search",
        protected: true,
    }
];

export default routes;
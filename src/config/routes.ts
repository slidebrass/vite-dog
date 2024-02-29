import Home from '../pages/Home';
import Results from '../pages/Search';
import Favorites from '../pages/Favorites';

interface RouteType {
    path: string,
    component: () => JSX.Element,
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
        path: "/results",
        component: Results,
        name: "Results",
        protected: true,
    }
];

export default routes;
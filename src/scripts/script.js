import qRouter, { autoRouting } from "../modules/quick_router/qRouter";
import Home from "../pages/home";
import About from "../pages/about";

import { crossEvent } from "../modules/quick_router/qRouter";

let isHome = true;
let currentRoute = 'home'; // Track current route

export default async function ScriptA() {

    const routes = [
        {
            name: "home",
            component: Home()
        },
        {
            name: "about",
            component: About()
        }
    ]

    const router = new qRouter({
        id: 'app',
        type: "destory"
    });

    router.initRoutes({
        routes: routes
    });


    crossEvent("click", "more", async () => {

        if (isHome) {
            router.load('about');
            router.push('home');
            currentRoute = 'about';
            isHome = false;

        } else {
            router.load('home');
            router.push('about');
            currentRoute = 'home';
            isHome = true;
        }
    })

    autoRouting({
        router: router,
        currentRoute: currentRoute,
        switcher: isHome,
        setHashHistory: true
    });

}
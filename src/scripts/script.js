import qRouter from "../modules/quick_router/qRouter";
import Home from "../pages/home";
import About from "../pages/about";

import { crossEvent } from "../modules/quick_router/qRouter";

let isHome = true;

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
            isHome = false;

        } else {
            router.load('home');
            router.push('about');
            isHome = true;
        }
    })

}
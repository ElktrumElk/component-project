import { Await } from "react-router-dom";

class qRouter {
    /** */
    constructor({ id = null, type = "hide" }) {
        this.id = id;
        this.history = [];
        this.type = type;
    }


    initRoutes({
        routes = []

    }) {
        /**This holds the component-page*/
        this.pages = {};

        /**Comment: store components */
        routes.forEach(route => {
            this.pages[`${route.name}`] = {
                component: route.component
            }
        })
    }

    /**Path to push */
    async load(name) {
        try {
            /**check if the pages exist */
            if (Object.keys(this.pages).includes(name)) {

                /**Comment: Get the component from the created pages array*/
                let cmp = await this.pages[`${name}`].component;

                /**Debugging */
                // console.log(Array.from(document.getElementById(this.id).children));

                // Check if container exists before accessing it
                const container = document.getElementById(this.id);

                if (!container) {
                    throw new Error(`Router container with id '${this.id}' not found`);
                }

                /**Comment: Check if the component exist within the container */
                if (Array.from(container.children).includes(document.getElementById(cmp.id))) {

                    document.getElementById(cmp.id).style.display = "";


                } else {
                    container.appendChild(await this.pages[`${name}`].component);
                    location.hash = cmp.id;
                }
            }
        } catch (e) {

            const container = document.getElementById(this.id);
            if (container) {
                container.innerText = "Path not found";
            }
            console.error('Router load error:', e);
        }
    }

    async push(name) {

        try {

            let cmp = await this.pages[`${name}`].component;

            // Check if component element exists before hiding
            const cmpElement = document.getElementById(cmp.id);
            if (cmpElement) {

                /**Comment: Check for types.
                 * if the destory is given then the current component will be destory
                 * and the new one loads in
                 */
                if (this.type === "destory") {
                    document.getElementById(cmp.id).remove();
                } else if (this.type === "hide") {
                    cmpElement.style.display = "none";
                } else {
                    cmpElement.style.display = "none";
                }
            }

            this.history.push(await this.pages[`${name}`].component);

        } catch (e) {

            const prev = this.history[this.history.length - 1];

            // Check if previous component element exists before showing
            if (prev && prev.id) {
                const prevElement = document.getElementById(prev.id);
                if (prevElement) {
                    prevElement.style.display = "";
                }
            }

            console.error('Router push error:', e)
            console.log(prev)
        }
    }

    async back(count) {
        // document.getElementById(this.id).removeChild()
    }
}

export default qRouter;

export function crossEvent(event, id, cb) {
    document.addEventListener(event, (e) => {

        const elem = e.target.closest(`#${id}`)
        if (elem) {
            cb && cb(cb)
        } else {
            return "Error"
        }
    })

} 
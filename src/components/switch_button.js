import comp from "../modules/component/component";
import Home from "../pages/home";
import About from "../pages/about";
import qRouter from "../modules/quick_router/qRouter";

async function SwitchButton() {

   
    
    return await comp({
        path: '/index/pageSwitch.html',
        id: 'pageswitch'
    });
}

export default SwitchButton;
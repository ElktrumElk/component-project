import comp from "../modules/component/component";
import Header from "../components/fixed_head";

async function Home () {
     
    return await comp({
        path: '/index/home.html',
        id: "home",
        child: await Header(),
        position_id: 'cv'
    });

}

export default Home
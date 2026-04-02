import comp from "../modules/component/component";
import Header from "../components/fixed_head";


async function About() {

    return await comp({
        path: '/index/about.html',
        id: 'about',
        child: await Header(),
        position_id: 'a'
    });
}

export default About;
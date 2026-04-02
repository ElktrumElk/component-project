import comp from "../modules/component/component";

async function Header() {
    return await comp({
        path: '/index/header.html',
        id: 'fixed_head'
    });
}
export default Header;
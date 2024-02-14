import { Link } from "react-router-dom"
import "./NavShop.scss"
let dataLinks = [
    {
        id: 100,
        link: "home",
        path: "/",
    },
    {
        id: 200,
        link: "our store",
        path: "/ourStore",
    },
    {
        id: 300,
        link: "blogs",
        path: "/blogs",
    },
    {
        id: 400,
        link: "contact",
        path: "/contact",
    },
]
const NavShop = () => {
    return (
        <div className='NavShop cardShadow'>
            <div className="title">shop by categories</div>
            <ul>
                {dataLinks.map(item =>
                    <li key={item.id} ><Link to={item.path}>{item.link}</Link></li>)}
            </ul>
        </div>
    )
}

export default NavShop
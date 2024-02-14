import "./Header.scss"
import { BiCategory } from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import myImg from "../../assaset/Mohamed_Elsayed.jpg"
import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderBottom = () => {
    const [statusMenu, setStatusMenu] = useState(false)
    const handleToggleMenu = () => {
        setStatusMenu(!statusMenu)
    }
    return (
        <div className="HeaderBottom">
            <div onClick={handleToggleMenu} className={`overlay ${statusMenu ? "active" : ""}`}></div>
            <div className="container">
                <div onClick={handleToggleMenu}>
                    <i><BiCategory /></i>
                    <span>shop categories</span>
                    <small><FaChevronRight /></small>
                </div>
                <ul className={`list ${statusMenu ? "activeMopile" : ""}`}>
                    <div className="headerMenuePhone">
                        <div>
                            <img src={myImg} alt="" />
                            <p className="name">mohamed <br /> elsaye</p>
                        </div>
                        <i onClick={handleToggleMenu}><FaChevronRight /></i>
                    </div>
                    <NavLink to={"/"} className="item">home</NavLink>
                    <NavLink to={"/ourStore"} className="item">our store</NavLink>
                    <NavLink to={"/blogs"} className="item">blogs</NavLink>
                    <NavLink to={"/contact"} className="item">contact</NavLink>
                </ul>
                {/* <i className="iconMenue" ><IoMdMenu /></i> */}
            </div>
        </div>
    )
}

export default HeaderBottom
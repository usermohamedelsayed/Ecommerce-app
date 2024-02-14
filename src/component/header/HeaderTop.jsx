import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdGitCompare, IoMdLogIn, IoMdMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateValIno } from '../../redux/sliceSearch';
import myImg from "../../assaset/Mohamed_Elsayed.jpg"
import './Header.scss'
const HeaderTop = () => {
    const refInputSearch = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [statusMenu, setStatusMenu] = useState(false)
    const { pathname } = useLocation();
    const { data } = useSelector(state => state.sliceCart)
    const handleToggleMenu = () => {
        setStatusMenu(!statusMenu)
    }
    const calcTotalPriceProducts = () => {
        let total = data.reduce((p, c) => p + (c.price * c.amount), 0)
        return total
    }
    const handleResultSearch = () => {
        navigate('/search/' + refInputSearch.current.value)
        dispatch(updateValIno(refInputSearch.current.value))
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);
    return (
        <div className='HeaderTop'>
            <div onClick={handleToggleMenu} className={`overlay ${statusMenu ? "active" : ""}`}></div>
            <div className="container">
                <div className="barTop">
                    <span>free shopping over $100</span>
                    <div>
                        <span>hotline(000) 4232 424 555</span>
                        <select>
                            <option>english</option>
                            <option>aribic</option>
                            <option>aribic</option>
                        </select>
                        <select>
                            <option>usd</option>
                            <option>eg</option>
                            <option>ksa</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className="barBottom">
                <div className="container">
                    <div className="logo">
                        <Link to={"/"}>
                            <img src={myImg} alt={"myImg"} />
                        </Link>
                    </div>
                    <div className="boxSearch">
                        <input
                            ref={refInputSearch}
                            onKeyUp={(e) => e.key === "Enter" ? handleResultSearch() : ""}
                            type="text"
                            placeholder='search product here...'
                        />
                        <i onClick={handleResultSearch}><IoSearch /></i>
                    </div>
                    <ul className={`list ${statusMenu ? "activeMopile" : ""} `}>
                        <div className="headerMenuePhone">
                            <div>
                                <img src={myImg} alt="" />
                                <p className="name">mohamed <br /> elsaye</p>
                            </div>
                            <i onClick={handleToggleMenu}><FaChevronRight /></i>
                        </div>
                        <Link to={"/compareProducts"} className='item' onClick={handleToggleMenu}>
                            <i><IoMdGitCompare /></i>
                            <span>
                                <small>compare</small> <br />
                                <small>products</small>
                            </span>
                        </Link>
                        <Link to={"/favourite"} className='item' onClick={handleToggleMenu}>
                            <i><FaHeart /></i>
                            <span>
                                <small>favourite</small> <br />
                                <small>wishlist</small>
                            </span>
                        </Link>
                        <Link to={"/login"} className='item' onClick={handleToggleMenu}>
                            <i><IoMdLogIn /></i>
                            <span>
                                <small>login</small> <br />
                                <small>my account</small>
                            </span>
                        </Link>
                        <Link to={"/cart"} className='item' onClick={handleToggleMenu}>
                            <i><FaShoppingCart /></i>
                            <span>
                                <small className='count'>{data.length < 9 ? data.length : "9+"}</small> <br />
                                <small>${calcTotalPriceProducts()}</small>
                            </span>
                        </Link>
                    </ul>
                    <i onClick={handleToggleMenu} className="iconMenue"><IoMdMenu /></i>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}

export default HeaderTop
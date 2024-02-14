import { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { IoIosHeart, IoIosHeartEmpty, IoMdGitCompare } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { GrView } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { addProductToCart } from '../../../redux/sliceCart';
import { addProductToFavourite } from '../../../redux/sliceFavourite';
import { addProductCompare } from '../../../redux/sliceCompareProducts';
import Swal from 'sweetalert2';
import productNotFound from '../../../assaset/no_product_found.jpg'
import './CardLighter.scss'
const CardLighter = ({ product }) => {
    const refFilling = useRef()
    const location = useLocation()
    const dispatch = useDispatch()
    const { valInp } = useSelector(state => state.sliceProductsByCat)
    const { data: dataFavorites } = useSelector(state => state.sliceFavourite)
    const [heartIcon, setHeartIcon] = useState(true)
    const addedSuccessfully = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Added Successfully"
        });
    }
    const handleAddToCart = (product) => {
        addedSuccessfully()
        dispatch(addProductToCart(product))
    }
    const handleAddToFavorites = (product) => {
        addedSuccessfully()
        dispatch(addProductToFavourite(product))
        setHeartIcon(!heartIcon)
    }
    const handleAddToCompare = (product) => {
        addedSuccessfully()
        dispatch(addProductCompare(product))
    }
    const addSelectResSearch = (text) => {
        let prev = text.slice(0, text.toLowerCase().indexOf(valInp.toLowerCase())),
            next = text.slice(prev.length + valInp.length);
        return valInp && location.pathname === "/ourStore" ? <>{prev}<span className='markSelect'>{valInp}</span>{next}</> : text.slice(0, 20) + '..'
    }
    const handleFlipeCard = () => {
        refFilling.current.classList.toggle("flip")
    }
    const handleErrorImg = (e) => {
        e.target.src = productNotFound
    }
    if (product) return (
        <div className='CardLighter '>
            <div className="options">
                <div onClick={() => handleAddToCart(product)} className="option">
                    <i><FaCartShopping /></i>
                </div>
                <div onClick={() => handleAddToFavorites(product)} className="option">
                    <i className='heart'>
                        {
                            (dataFavorites.find(item => +item.id === +product.id)) ? <IoIosHeart style={{ color: "red" }} /> :
                                heartIcon ? <IoIosHeartEmpty /> : <IoIosHeart style={{ color: "red" }} />
                        }
                    </i>
                </div>
                <div onClick={() => handleAddToCompare(product)} className="option">
                    <i><IoMdGitCompare /></i>
                </div>
                <Link to={"/product/" + product.id} className="option">
                    <i><GrView /></i>
                </Link>
            </div>
            <div
                ref={refFilling}
                onClick={handleFlipeCard}
                className='filling'>
                <div className="images">
                    <div className="front">
                        <img
                            src={product.images[0]}
                            alt={"img_product" + product.id}
                            onError={handleErrorImg}
                        />
                    </div>
                    <div className="back">
                        <img src={product.images[1]}
                            alt={"img_product" + product.id}
                            onError={handleErrorImg}
                        />
                    </div>
                </div>
                <div className='details'>
                    <span className='catSmall'>{product.category.name}</span>
                    <p className='title' >{addSelectResSearch(product.title)}</p>
                    <div className="stars">
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                        <i><FaStar /></i>
                    </div>
                    <small className='price'>${product.price}</small>
                </div>
            </div>
        </div>
    )
}

export default CardLighter
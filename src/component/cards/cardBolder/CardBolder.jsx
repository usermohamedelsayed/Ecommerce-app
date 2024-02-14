import { useEffect, useRef, useState } from "react"
import { FaStar } from 'react-icons/fa6'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart } from "../../../redux/sliceCart"
import { addProductToFavourite } from "../../../redux/sliceFavourite"
import { Link, useParams } from "react-router-dom"
import Swal from "sweetalert2"
import productNotFound from "../../../assaset/no_product_found.jpg"
import "./CardBolder.scss"
const numRandom = (min, max) => Math.floor(Math.random() * (max - min) + min)
const CardBolder = ({ product }) => {
    const refImgBig = useRef()
    const { valueInput } = useParams()
    const [numProduct, setNumProduct] = useState(1)
    const { data } = useSelector(state => state.sliceFavourite)
    const dispatch = useDispatch()
    const addMarkSearch = (text) => {
        if (valueInput) {
            let prev = text.slice(0, text.indexOf(valueInput)),
                next = text.slice(valueInput.length || 0);
            return <>{prev} <span style={{ background: "#FFC107" }}>{valueInput}</span>{next}</>
        }
        return text.slice(0, 18) + '..'
    }
    const handlePercenTotalProduct = (percen) => {
        return (percen / 1000) * 100 + "%"
    }
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
    const addProductCart = (product) => {
        dispatch(addProductToCart(product))
        addedSuccessfully()
    }
    const addProductFavourite = (product) => {
        dispatch(addProductToFavourite(product))
        addedSuccessfully()
    }
    const handleErrorImg = (e) => {
        e.target.src = productNotFound
    }
    const replceSrcToBigImg = (e) => {
        refImgBig.current.src = e.target.src
    }
    useEffect(() => {
        setNumProduct(numRandom(1, 1000))
    }, [])
    if (product) return (
        <div className="CardBolder">
            <div className="left">
                <div className="head">
                    <span className="percen">-{Math.ceil(Math.random() * 100)}%</span>
                    <div className='heart' onClick={() => addProductFavourite(product)}>
                        {(data.find(item => +item.id === +product.id)) ?
                            <i><IoIosHeart style={{ color: "red" }} /></i>
                            : (<i><IoIosHeartEmpty /></i>)}
                    </div>
                </div>

                <div className="imgs">
                    <Link to={`/product/${product.id}`}>
                        <img
                            ref={refImgBig}
                            className='imgBig'
                            src={product.images[0]}
                            onError={handleErrorImg}
                            alt={"img" + product.id}
                        />
                    </Link>
                    <div>
                        {product.images.map(img =>
                            <img
                                key={Math.random()}
                                className='imgSmall'
                                src={img}
                                alt={"img" + product.id}
                                onError={handleErrorImg}
                                onClick={replceSrcToBigImg}
                            />)}
                    </div>
                </div>
            </div>
            <div className="right">
                <small className="catSmall">{product.category.name}</small>
                <p className="title">{addMarkSearch(product.title)}</p>
                <div className="stars">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                </div>
                <div className="price">
                    <span className='currPrice'>${product.price}</span>
                    {
                        product.oldPrice && (
                            <span className='oldPrice'>${product.oldPrice}</span>
                        )
                    }
                </div>
                <div className="date">
                    <span className="days"><span>{numRandom(1, 300)}</span> dayes </span>
                    <span className="h">{numRandom(1, 12)}</span>:
                    <span className="m">{numRandom(1, 59)}</span>:
                    <span className="s">{numRandom(1, 59)}</span>
                </div>
                <div className="progress">
                    <span>products {numProduct}</span>
                    <p className='lineProg'><span style={{ width: handlePercenTotalProduct(numProduct) }}></span></p>
                    <span className='maxTotalProducts'>1000</span>
                </div>
                <button onClick={() => addProductCart(product)} className='btn'>add to cart</button>
            </div>
        </div>
    )
}

export default CardBolder
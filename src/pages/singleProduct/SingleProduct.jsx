import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import { FaCartShopping, FaXmark } from "react-icons/fa6"
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoIosHeart, IoMdGitCompare } from "react-icons/io"
import { addProductToFavourite } from "../../redux/sliceFavourite"
import { addProductToCart } from "../../redux/sliceCart"
import { addProductCompare } from "../../redux/sliceCompareProducts"
import { fetchSingleProduct } from "../../redux/sliceSingleProduct"
import Swal from "sweetalert2"
import img404 from "../../assaset/404.png"
import productNotFound from "../../assaset/no_product_found.jpg"
import "./SingleProduct.scss"
const SingleProduct = () => {
    const refImgBig = useRef()
    const refImgFullScrean = useRef()
    const popupFullScrean = useRef()
    const { id } = useParams()
    const { data: product, loadding, error } = useSelector(state => state.sliceSingleProduct)
    const dispatch = useDispatch()
    const replaceSrc = (src) => {
        refImgBig.current.src = src
    }
    const showFullScrean = () => {
        let src = refImgBig.current.src
        refImgFullScrean.current.src = src;
        handleActivePopup()
    }
    const handleActivePopup = () => {
        popupFullScrean.current.classList.toggle("active")
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
    const addToFavourite = () => {
        dispatch(addProductToFavourite(product))
        addedSuccessfully()
    }
    const addToCart = () => {
        dispatch(addProductToCart(product))
        addedSuccessfully()
    }
    const addToCompare = () => {
        dispatch(addProductCompare(product))
        addedSuccessfully()
    }
    const handleErrorImg = (e) => {
        e.target.src = productNotFound
    }
    useEffect(() => {
        dispatch(fetchSingleProduct(id))
    }, [dispatch, id])
    if (loadding) return (<div style={{ height: "80vh" }} className="loadding"></div>)
    if (error) return (<img src={img404} alt="img404" className="img404"></img>)
    if (product.images) return (
        <div className='SingleProduct'>
            <div ref={popupFullScrean} className="popupFullScrean">
                <div onClick={handleActivePopup} className="overlay"></div>
                <div className="imgPopup">
                    <i onClick={handleActivePopup}><FaXmark /></i>
                    <img
                        ref={refImgFullScrean} alt="img"
                        onError={handleErrorImg}
                    />
                </div>
            </div>
            <div className="container">
                <div className="imagesProduct">
                    <img
                        ref={refImgBig}
                        className="imgBig"
                        src={product.images[0]}
                        alt="img"
                        onError={handleErrorImg}
                    />
                    <div className="branchImgs">
                        {product.images.map(src => <img
                            onClick={() => replaceSrc(src)}
                            key={Math.random()}
                            src={src} alt="img"
                            onError={handleErrorImg}
                        />)}
                    </div>
                    <div className="btns">
                        <i onClick={addToCart}><FaCartShopping /></i>
                        <i onClick={addToCompare}><IoMdGitCompare /></i>
                        <i onClick={addToFavourite}><IoIosHeart /></i>
                        <i onClick={showFullScrean}><BsArrowsFullscreen /></i>
                    </div>
                </div>
                <div className="detalis">
                    <p className="title">{product.title}</p>
                    <p className="desc">{product.description}</p>
                    <p className="price">${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
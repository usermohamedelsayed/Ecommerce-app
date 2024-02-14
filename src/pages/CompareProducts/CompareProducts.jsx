import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { IoIosCart, IoIosHeart } from "react-icons/io"
import { BiShow, BiTrash } from "react-icons/bi"
import { removeProductCompare } from "../../redux/sliceCompareProducts"
import { addProductToFavourite } from "../../redux/sliceFavourite"
import { addProductToCart } from "../../redux/sliceCart"
import { Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import Swal from "sweetalert2"
import compareEmpty from "../../animation/compareEmpty.json"
import "./CompareProducts.scss"
const Product = ({ item }) => {
    const dispatch = useDispatch()
    const refImgs = useRef()
    const handleFlipImg = () => {
        refImgs.current.classList.toggle("flip")
    }
    const addedSuccessfully = (id) => {
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
        setTimeout(() => {
            dispatch(dispatch(removeProductCompare(id)))
        }, 60)
    }
    const addToFavourite = (product) => {
        dispatch(addProductToFavourite(product))
        addedSuccessfully(product.id)
    }
    const addToCart = (product) => {
        dispatch(addProductToCart(product))
        addedSuccessfully(product.id)
    }
    const removeProduct = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeProductCompare(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className="ProductCompare">
            <div ref={refImgs} onClick={handleFlipImg} className="imgs">
                <img className="front" src={item.images[0]} alt="imageCompare" />
                <img className="back" src={item.images[1]} alt="imageCompare" />
            </div>
            <div className="detalis">
                <p className="title">{item.title.slice(0, 18) + "..."}</p>
                <p className="desc">{item.description.slice(0, 50) + "..."}</p>
                <p className="cat">
                    <span>brand: </span>
                    <span>{item.category.name}</span>
                </p>
                <p className="cat">
                    <span>sku: skuo303</span>
                    <span>{item.category.name}</span>
                </p>
                <p className="avaliablitiy">
                    <span>avaliablitiy: </span>
                    <span>in stock</span>
                </p>
                <p className="size">
                    <span>size: </span>
                    <span>in stock</span>
                </p>
            </div>

            <div className="iconsSetting">
                <i><Link to={`/product/${item.id}`}><BiShow /></Link></i>
                <i onClick={() => addToCart(item)}><IoIosCart /></i>
                <i onClick={() => addToFavourite(item)}><IoIosHeart /></i>
                <i onClick={() => removeProduct(item.id)}><BiTrash /></i>
            </div>
        </div>
    )
}
const CompareProducts = () => {
    const { data } = useSelector(state => state.sliceCompareProducts)
    return (
        <div className="CompareProducts">
            <div className="container">
                {data.length ? data.map(item => <Product key={item.id} item={item} />) : ""}
            </div>
            {!data.length ? <div className="Player"><Player src={compareEmpty} loop autoplay /></div> : ""}

        </div>
    )
}

export default CompareProducts
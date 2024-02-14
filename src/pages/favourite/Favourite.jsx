import { useRef } from "react";
import { BiGitCompare, BiShow, BiTrash } from "react-icons/bi";
import { IoIosCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import favouriteEmpty from "../../animation/favouriteEmpty.json";

import "./Favourite.scss"
import { removeProductFromFavourite } from "../../redux/sliceFavourite";
import { addProductToCart } from "../../redux/sliceCart";
import Swal from "sweetalert2";
import { addProductCompare } from "../../redux/sliceCompareProducts";
import { Link } from "react-router-dom";
const ProductFavourite = ({ item }) => {
    const refImage = useRef()
    const dispatch = useDispatch()
    const handleFlipImage = () => {
        refImage.current.classList.toggle("flip")
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
            dispatch(removeProductFromFavourite(id))
        }, 60)
    }
    const addToCompare = (product) => {
        dispatch(addProductCompare(product))
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
                dispatch(removeProductFromFavourite(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className="productFavourite cardShadow">
            <div
                ref={refImage}
                onClick={handleFlipImage}
                className="image">
                <img className="front" src={item.images[0]} alt="productFavourite" />
                <img className="back" src={item.images[1]} alt="productFavourite" />
            </div>
            <div className="details">
                <p className="title">{item.title.slice(0, 14) + "..."}</p>
                <p className="desc">{item.description.slice(0, 50) + "..."}</p>
                <p className="price">${item.price}</p>
            </div>
            <div className="iconsSetting">
                <i><Link to={`/product/${item.id}`}><BiShow /></Link></i>
                <i onClick={() => addToCompare(item)}><BiGitCompare /></i>
                <i onClick={() => addToCart(item)}><IoIosCart /></i>
                <i onClick={() => removeProduct(item.id)}><BiTrash /></i>
            </div>
        </div>
    )
}

const Favourite = () => {
    const { data } = useSelector(state => state.sliceFavourite)
    return (
        <div className='Favourite'>
            <div className="container">
                {data.length ? data.map(item => (
                    <ProductFavourite key={item.id} item={item} />
                )) : ""}
            </div>
            {!data.length ? <div className="Player"><Player src={favouriteEmpty} loop autoplay /></div> : ""}
        </div>
    )
}

export default Favourite
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react";
import { clearCart, decreaseProductAmount, increaseProductAmount, removeProductFromCart } from "../../redux/sliceCart";
import { BiGitCompare, BiShow, BiTrash } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import { Player } from "@lottiefiles/react-lottie-player";
import { addProductToFavourite } from "../../redux/sliceFavourite";
import { addProductCompare } from "../../redux/sliceCompareProducts";
import cartEmpty from "../../animation/cartEmpty.json";
import Swal from "sweetalert2";
import "./Cart.scss"
import { Link } from "react-router-dom";

const ProductCart = ({ item }) => {
    const dispatch = useDispatch()
    const refProduct = useRef()
    const handleFlipeImg = () => {
        refProduct.current.classList.toggle("flip")
    }
    const calcAmount = (price, amount) => {
        let calc = +price * +amount,
            total = Number.isInteger(calc) ? calc : calc.toFixed(2);
        return total
    }
    const increaseAmount = (id) => {
        dispatch(increaseProductAmount(id))
    }
    const decreaseAmount = (id) => {
        dispatch(decreaseProductAmount(id))
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
                dispatch(removeProductFromCart(id))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
            }
        });
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
            dispatch(dispatch(removeProductFromCart(id)))
        }, 60)
    }
    const addToFavourite = (product) => {
        dispatch(addProductToFavourite(product))
        addedSuccessfully(product.id)
    }
    const addToCompare = (product) => {
        dispatch(addProductCompare(product))
        addedSuccessfully(product.id)
    }
    return (
        <div className="product">
            <div ref={refProduct}
                className="image"
            >
                <img onClick={handleFlipeImg} className="front" src={item.images[0]} alt="imgCart" />
                <img onClick={handleFlipeImg} className="back" src={item.images[1]} alt="imgCart" />
                <div className="iconsSetting">
                    <div className="icons">
                        <i><Link to={`/product/${item.id}`}><BiShow /></Link></i>
                        <i onClick={() => addToCompare(item)}><BiGitCompare /></i>
                        <i onClick={() => addToFavourite(item)}><IoIosHeart /></i>
                        <i onClick={() => removeProduct(item.id)}><BiTrash /></i>
                    </div>
                </div>
            </div>
            <div className="details">
                <p className="title">{item.title}</p>
                <p className="desc">{item.description}</p>
                <div className="detalisPrice">
                    <div className="groub">
                        <div className="amount">
                            <span onClick={() => decreaseAmount(item.id)}>-</span>
                            <p>{item.amount}</p>
                            <span onClick={() => increaseAmount(item.id)}>+</span>
                        </div>
                        <p className="price">${item.price}</p>
                    </div>
                    <span className="totalPrice">total: ${calcAmount(item.price, item.amount)}</span>
                </div>
            </div>
        </div>
    );
};

const Cart = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.sliceCart);
    const calcTotalPriceProducts = () => {
        let total = data.reduce((p, c) => p + (c.price * c.amount), 0)
        return total
    }
    const clearCartProducts = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, clear cart!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearCart())
                Swal.fire({
                    title: "Deleted!",
                    text: "Your cart has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className='Cart'>
            <div className="container">
                <div className="left cardShadow">
                    {data.length ? data.map(item => <ProductCart key={item.id} item={item} />)
                        : <Player style={{ width: "min(100%, 450px)" }} src={cartEmpty} loop autoplay />}
                </div>
                <div className="right cardShadow">
                    <p className="subtTotal">subtotal : ${calcTotalPriceProducts()}</p>
                    <span>taxes and shopping calculated at checkout</span>
                    <Link to={"/signin"} className="btn">check out</Link>
                    {data.length >= 2 && <button onClick={clearCartProducts} className="btn clearCart">clear cart</button>}
                </div>
            </div>
        </div>
    );
};

export default Cart
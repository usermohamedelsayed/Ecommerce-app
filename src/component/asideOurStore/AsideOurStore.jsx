import { FaChevronDown, FaChevronRight, FaStar } from "react-icons/fa6"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../../redux/sliceCategories"
import { fetchProductsByCat, getValInpTitle } from "../../redux/sliceProductsByCat"
import { fetchProducts } from "../../redux/sliceProducts"
import NavShop from "../navShop/NavShop"
import productNotFound from "../../assaset/no_product_found.jpg"
import "./AsideOurStore.scss"
const handleHeightHeader = (refAsideOurStore) => {
    let prevScroll = window.scrollY;
    window.addEventListener("scroll", () => {
        let nextScroll = window.scrollY;
        if (prevScroll < nextScroll) {
            refAsideOurStore.style.top = "113px"
        } else {
            refAsideOurStore.style.top = "140px"
        }
        prevScroll = nextScroll
    })
}
const AsideOurStore = () => {
    const refAsideOurStore = useRef()
    const refFilterBox = useRef()
    const refInpMin = useRef()
    const refInpMax = useRef()
    const refInpFilterByTitle = useRef();
    const dispatch = useDispatch();
    const { data } = useSelector(state => state.sliceProducts);
    const [catID, setCatID] = useState("")
    const [productsRandom, setProductsRandom] = useState([])
    const { dataCategories } = useSelector(state => state.sliceCategories);

    const handleFilter = (cat) => {
        let val = refInpFilterByTitle.current.value;
        let min = Number(refInpMin.current.value),
            max = Number(refInpMax.current.value);
        dispatch(fetchProductsByCat(`products/?title=${val.toLowerCase()}&price_min=${min}&price_max=${max}${cat}`))
    }
    const getCatToFuncFilter = (target, item) => {
        target.parentElement.querySelector(".active")?.classList.remove("active");
        if (item !== "all") {
            handleFilter(`&categoryId=${item.id}`)
            setCatID(`&categoryId=${item.id}`)
        } else {
            handleFilter('products')
        }
        target.classList.add("active");
    };
    const getTitleToFuncFilter = () => {
        handleFilter(catID)
        let val = refInpFilterByTitle.current.value;
        dispatch(getValInpTitle(val));
    };
    const getPriceToFuncFilter = () => {
        handleFilter(catID)
    }
    const injectCategoriesLi = () => {
        return (
            <><li onClick={(e) => getCatToFuncFilter(e.target, "all")}>all</li>
                {dataCategories.slice(0, 5).map((item, i) => (
                    <li
                        onClick={(e) => getCatToFuncFilter(e.target, item)}
                        key={item.id}
                    >
                        {item.name}
                    </li>
                ))}</>
        )
    };
    const handleHeightFilterBox = () => {
        let tag = refFilterBox.current;
        if (tag.classList.contains("active")) {
            refFilterBox.current.style.height = "50px"
            tag.classList.remove("active")
        } else {
            refFilterBox.current.style.height = refFilterBox.current.scrollHeight + "px"
            tag.classList.add("active")
        }
    }
    const handleErrorImg = (e) => {
        e.target.src = productNotFound
    }
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
        dispatch(fetchProductsByCat('products'))
    }, [dispatch])
    useEffect(() => {
        let arr = []
        for (let i = 0; i < 2; i++) {
            arr.push(data[Math.floor(Math.random() * data.length)])
            setProductsRandom(arr)
        }
    }, [data])
    useEffect(() => {
        handleHeightHeader(refAsideOurStore.current)
    }, [])
    return (
        <div className='AsideOurStore'>
            <div ref={refAsideOurStore} className="menueLinks">
                <NavShop />
                <div ref={refFilterBox} className="box filterBox cardShadow">
                    <p
                        onClick={handleHeightFilterBox}
                        className="title titleFilterBox"
                    >filter by <i><FaChevronDown /></i></p>
                    <div className="filterTitle">
                        <p className="subtitle">title</p>
                        <div className="inp">
                            <input
                                ref={refInpFilterByTitle}
                                onKeyUp={(e) => e.key === "Enter" ? getTitleToFuncFilter() : ""}
                                type="text"
                                placeholder="filter by title.."
                            />
                            <i onClick={getTitleToFuncFilter} className="chevronRight"><FaChevronRight /></i>
                        </div>
                    </div>
                    <div className="filterPrice">
                        <p className="subtitle">price</p>
                        <div className="inps">
                            <input
                                ref={refInpMin}
                                onKeyUp={(e) => e.key === "Enter" && getPriceToFuncFilter()}
                                type="number"
                                placeholder="$ from"
                            />
                            <input
                                ref={refInpMax}
                                onKeyUp={(e) => e.key === "Enter" && getPriceToFuncFilter()}
                                type="number"
                                placeholder="$ to"
                            />
                            <i onClick={getPriceToFuncFilter} className="chevronRight"><FaChevronRight /></i>
                        </div>
                    </div>
                    <div className="filterCat">
                        <p className="subtitle">categories</p>
                        <ul>{injectCategoriesLi()}</ul>
                    </div>
                </div>
                <div className="box cardShadow">
                    <p className="title">random products</p>
                    <ul className="productRandom">
                        {
                            productsRandom.every(item => item) ? productsRandom.map(item => (
                                <li key={item.id}>
                                    <img
                                        src={item.images[0]}
                                        alt="productRandom"
                                        onError={handleErrorImg}
                                    />
                                    <div>
                                        <p className="titleProduct">{item.title.slice(0, 20) + ".."}</p>
                                        <div className="starts">
                                            <i><FaStar /></i>
                                            <i><FaStar /></i>
                                            <i><FaStar /></i>
                                            <i><FaStar /></i>
                                            <i><FaStar /></i>
                                        </div>
                                        <span className="price">${item.price}</span>
                                    </div>
                                </li>
                            )) : <div className="loadding" style={{ height: "50px" }}></div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AsideOurStore
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineMenuAlt4 } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper/modules"
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardLighter from "../cards/cardLighter/CardLighter";
import img404 from "../../assaset/404.png"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./ArticleOurStore.scss"
let breakpointsCol4 = {
    0: {
        slidesPerView: 2,
    },
    450: {
        slidesPerView: 1,
    },
    650: {
        slidesPerView: 2,
    },
    850: {
        slidesPerView: 3,
    },
    1000: {
        slidesPerView: 4,
    },
};
const ArticleOurStore = () => {
    const refArticleOurStore = useRef()
    const { data, loadding, error } = useSelector(state => state.sliceProductsByCat)
    const [activeLayout, setActiveLayout] = useState("cols4");
    const [countRowsSwiper, setCountRowsSwiper] = useState(2);
    const [countColsSwiper, setCountColsSwiper] = useState(4);
    const handleLayoutSwiper = (e, type) => {
        switch (type) {
            case "cols4":
                setCountRowsSwiper(2)
                setCountColsSwiper(4)
                break
            case "cols3":
                setCountRowsSwiper(2)
                setCountColsSwiper(3)
                break
            case "rows2":
                setCountColsSwiper(3)
                setCountRowsSwiper(2)
                break
            case "rows3":
                setCountColsSwiper(3)
                setCountRowsSwiper(3)
                break
            default: return ""
        }
        setActiveLayout(type)
    }
    const handleLocomotionPages = (type) => {
        let btnNext = refArticleOurStore.current.querySelector(".swiper-button-next"),
            btnPrev = refArticleOurStore.current.querySelector(".swiper-button-prev");
        if (btnNext && btnPrev) {
            type === "prev" ? btnPrev.click() : btnNext.click()
        }
    }
    return (
        <div ref={refArticleOurStore} className='ArticleOurStore'>
            <nav className="cardShadow">
                <div className="layoutProducts">
                    <span className="lengthPro">{data.length} products</span>
                    <div className="icons">
                        <i
                            onClick={(e) => handleLayoutSwiper(e, "cols4")}
                            className={activeLayout === "cols4" ? "active" : ""}
                        >
                            <HiOutlineMenu />
                        </i>
                        <i
                            onClick={(e) => handleLayoutSwiper(e, "cols3")}
                            className={activeLayout === "cols3" ? "active" : ""}
                        >
                            <HiOutlineMenuAlt4 />
                        </i>
                        <i
                            onClick={(e) => handleLayoutSwiper(e, "rows2")}
                            className={activeLayout === "rows2" ? "active" : ""}
                        >
                            <HiOutlineMenuAlt4 />
                        </i>
                        <i
                            onClick={(e) => handleLayoutSwiper(e, "rows3")}
                            className={activeLayout === "rows3" ? "active" : ""}
                        >
                            <HiOutlineMenu />
                        </i>
                    </div>
                </div>
                <div className="icons controle">
                    <i onClick={() => handleLocomotionPages("prev")}>
                        <FaChevronLeft />
                    </i>
                    <i onClick={() => handleLocomotionPages("next")}>
                        <FaChevronRight />
                    </i>
                </div>
            </nav>
            {loadding ? <section className="loadding" style={{ fontSize: "22px" }}></section> : error ? (
                <img src={img404} alt="img404" className="img404"></img>
            ) : (
                <section>
                    {data.length >= 1 ? (
                        <Swiper
                            slidesPerView={countColsSwiper}
                            spaceBetween={10}
                            pagination={{ type: "fraction" }}
                            grid={{ rows: countRowsSwiper, fill: "row" }}
                            modules={[Grid, Pagination, Navigation]}
                            navigation={true}
                            className="mySwiper"
                            breakpoints={breakpointsCol4}
                        >

                            {data.map(item => (
                                <SwiperSlide
                                    className={`cardShadow`}
                                    style={{ height: `calc((100% - 10px) / ${countRowsSwiper})` }}
                                    key={Math.random()}
                                >
                                    <CardLighter product={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : <h1 style={{ textAlign: "center", marginTop: "20px" }}>no items match your search.</h1>}
                </section>
            )}
        </div>
    )
}

export default ArticleOurStore
import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { Navigation, Pagination } from "swiper/modules"
import img404 from "../../assaset/404.png"
import CardBold from "../cards/cardBold/CardBold"
import "./SwiperCarousl.scss"
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import { useSelector } from "react-redux"
const SwiperCarousl = ({
    children,
    data = [],
    numPerView,
    numSpace = 10,
    title,
    responsiveBreakpoints,
    cr,
    bg,
    idSpecial,
    statusCard = true
}) => {
    const refSwiperCarousl = useRef()
    const { lodding, error } = useSelector(state => state.sliceProducts)
    const handleChildren = () => {
        if (lodding) return (
            [0, 1, 2, 3, 4, 5, 6].map(el => (
                <SwiperSlide className={`${statusCard ? "cardShadow" : ""}`} key={Math.random()}>
                    <div className="loadding"><div style={{ width: "100%", height: "200px" }}></div></div>
                </SwiperSlide >
            ))
        )
        if (error) return (
            [0, 1, 2, 3, 4, 5, 6].map(el => (
                <SwiperSlide className={`${statusCard ? "cardShadow" : ""}`} key={Math.random()}>
                    <div><img src={img404} alt="404" className="img404"></img></div>
                </SwiperSlide>
            ))
        )
        if (data.length <= 2) return (
            [0, 1, 2, 3, 4, 5, 6].map(el => (
                <SwiperSlide className={`${statusCard ? "cardShadow" : ""}`} key={Math.random()}>
                    <div><img src={img404} alt="404" className="img404"></img></div>
                </SwiperSlide>
            ))
        )
        return (
            data.map((item, i) => (
                <SwiperSlide
                    className={`${statusCard ? "cardShadow" : ""}`}
                    key={item.id || Math.random()}
                >
                    {React.cloneElement(children, {
                        cr: i === idSpecial ? cr : "",
                        bg: i === idSpecial ? bg : "",
                        product: item,
                        src: item,
                        key: item.id
                    })}
                </SwiperSlide>
            ))
        )
    }
    const handleBtnsSwiper = (id) => {
        let btnPrev = refSwiperCarousl.current.querySelector(".swiper-button-prev"),
            btnNext = refSwiperCarousl.current.querySelector(".swiper-button-next");
        id === "prev" ? btnPrev.click() : btnNext.click()
    }
    return (
        <div ref={refSwiperCarousl} className={`SwiperCarousl `}>
            <div className="swiperHead">
                <h2 className='title'>{title}</h2>
                <div className="btns">
                    <i className="prev" onClick={() => handleBtnsSwiper("prev")}><FaChevronLeft /></i>
                    <i className="next" onClick={() => handleBtnsSwiper("next")}><FaChevronRight /></i>
                </div>
            </div>
            <Swiper
                slidesPerView={numPerView}
                spaceBetween={numSpace}
                navigation={true}
                pagination={{ type: "custom" }}
                breakpoints={responsiveBreakpoints}
                modules={[Pagination, Navigation]}
                className={`mySwiper ${!statusCard ? "cardShadow" : ""}`}
                style={{ marginTop: !statusCard ? "12px" : "" }}
            >
                {
                    title === "our popular products" ? (
                        <>
                            <SwiperSlide>
                                <div className="newCard cardShadow">
                                    <ul>{data.slice(0, 3).map(item => (<li key={item.id}>
                                        <img src={item.images[0]} alt="img" />
                                        <span>{item.title.slice(0, 10) + ".."}</span>
                                    </li>))}</ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardBold
                                    product={data[4]}
                                    bg='linear-gradient(45deg, #673AB7, var(--cr-primary))'
                                    cr='#fff'
                                    shrinkText={true}
                                />
                            </SwiperSlide>
                        </>
                    ) : ""
                }
                {handleChildren()}
            </Swiper>
        </div>
    )
}

export default SwiperCarousl
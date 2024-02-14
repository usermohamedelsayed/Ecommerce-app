import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from 'swiper/modules'
import { FaChevronLeft } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa6'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import './SwiperGrid.scss'
const SwiperGrid = ({ children, data = [], title, rows = 1, numPerView, responsiveBreakpoints }) => {
    const refSwiperGrid = useRef()
    const handleSlide = () => {
        return data.map(item =>
            <SwiperSlide className='cardShadow' key={item.id}>
                {React.cloneElement(children, { product: item })}
            </SwiperSlide>
        )
    }
    const handleBtnsSwiper = (id) => {
        let btnPrev = refSwiperGrid.current.querySelector(".swiper-button-prev"),
            btnNext = refSwiperGrid.current.querySelector(".swiper-button-next");
        id === "prev" ? btnPrev.click() : btnNext.click()
    }
    return (
        <div ref={refSwiperGrid} className='SwiperGrid'>
            <div className="swiperHead">
                <h2 className='title'>{title}</h2>
                <div className="btns">
                    <i className="prev" onClick={() => handleBtnsSwiper("prev")}><FaChevronLeft /></i>
                    <i className="next" onClick={() => handleBtnsSwiper("next")}><FaChevronRight /></i>
                </div>
            </div>
            <Swiper
                slidesPerView={numPerView}
                spaceBetween={10}
                grid={{ rows: rows, fill: 'row' }}
                navigation={true}
                breakpoints={responsiveBreakpoints}
                modules={[Grid, Navigation]}
            >
                {handleSlide()}
            </Swiper>
        </div>
    )
}

export default SwiperGrid
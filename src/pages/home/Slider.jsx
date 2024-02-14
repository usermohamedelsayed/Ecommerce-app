import React from 'react'
import imgSlider1 from "../../assaset/slider/catbanner-01.jpg"
import imgSlider2 from "../../assaset/slider/catbanner-02.jpg"
import catbanner3 from "../../assaset/slider/catbanner-03.jpg"
import catbanner4 from "../../assaset/slider/catbanner-04.jpg"
import catbanner5 from "../../assaset/slider/catbanner-05.jpg"
import catbanner6 from "../../assaset/slider/catbanner-06.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css";
// let data = [
//     {
//         id: 1,
//         cat: "BEST SALE",
//         title: "Laptops Max",
//         img: catbanner3,
//         desc: "From $1699.00 Or $64.62/Mo"
//     },
//     {
//         id: 2,
//         cat: "NEW ARRIVAL",
//         title: "Buy Ipad Air",
//         img: catbanner4,
//         desc: "From $599 Or $94.32/Mo For 12mo"
//     },
//     {
//         id: 3,
//         cat: "15% OFF",
//         title: "Smartwatch 7",
//         img: catbanner5,
//         desc: "Shop The Latest Band Styles And Colors"
//     },
//     {
//         id: 4,
//         cat: "FREE ENGRAVING",
//         title: "Aripods Max",
//         img: catbanner6,
//         desc: "Shop The Latest Band Styles And Colors"
//     },
// ]
const Slider = () => {
    return (
        <div className='Slider'>
            <div className="box box-1">
                <Swiper
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 7500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination]}
                    className='mySwiper'
                >
                    <SwiperSlide>
                        <img
                            draggable="false"
                            src={imgSlider1}
                            alt="banner1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            draggable="false"
                            src={imgSlider2}
                            alt="banner2"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="box box-2">
                <div>
                    <span>best sale</span>
                    <p>laptops max</p>
                    <small>from $1699.00 or <br /> $64.62/mo</small>
                </div>
                <img
                    draggable="false"
                    alt="catbanner3"
                    src={catbanner3}
                />
            </div>
            <div className="box box-3">
                <div>
                    <span>new arrival</span>
                    <p>buy ipad air</p>
                    <small>from $599 <br /> or $94.32/mo for 12mo</small>
                </div>
                <img
                    draggable="false"
                    alt="catbanner4"
                    src={catbanner4}
                />
            </div>
            <div className="box box-4">
                <div>
                    <span>15% off</span>
                    <p>smartwatch 7</p>
                    <small>shop the latest  <br /> band styles and colors</small>
                </div>
                <img
                    draggable="false"
                    alt="catbanner5"
                    src={catbanner5}
                />
            </div>
            <div className="box box-5">
                <div>
                    <span>free engraving</span>
                    <p>aripods max</p>
                    <small>high-fidelity playback & <br /> uitra-low distortion</small>
                </div>
                <img
                    draggable="false"
                    alt="catbanner6"
                    src={catbanner6}
                />
            </div>
        </div>
    )
}

export default Slider
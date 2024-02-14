import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CardBlog, CardBold, CardBolder, CardLighter, SwiperCarousl, SwiperGrid } from '../../component'
import Slider from './Slider'
import Wrapper1 from './Wrapper1'
import Wrapper2 from './Wrapper2'
import WrapperLogo from './WrapperLogo'
import './Home.scss'
import { dataBlog, dataLogos } from "../../data"
import { fetchProducts } from '../../redux/sliceProducts'
let breakpointsCol6 = {
    0: {
        slidesPerView: 1,
    },
    350: {
        slidesPerView: 2,
    },
    700: {
        slidesPerView: 3,
    },
    800: {
        slidesPerView: 4,
    },
    980: {
        slidesPerView: 5,
    },
    1300: {
        slidesPerView: 6,
    },
},
    breakpointsCol4 = {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView: 2,
        },
        850: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    };

const Home = () => {
    const { data } = useSelector(state => state.sliceProducts)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <div className='Home'>
            <div className="container">
                <Slider />
            </div>
            <div className='wrappers'>
                <div className="container">
                    <Wrapper1 />
                    <Wrapper2 />

                    {/* ----------- Products ------------ */}
                    <SwiperCarousl
                        data={data}
                        numPerView={6}
                        title={"featured collection"}
                        responsiveBreakpoints={breakpointsCol6}
                    >
                        <CardLighter />
                    </SwiperCarousl>

                    <SwiperCarousl
                        data={data}
                        numPerView={4}
                        responsiveBreakpoints={breakpointsCol4}
                        idSpecial={0}
                        bg={"linear-gradient(-45deg, #4CAF50, #9C27B0)"}
                        cr={"#fff"}
                    >
                        <CardBold />
                    </SwiperCarousl>

                    <SwiperGrid
                        data={data}
                        numPerView={3}
                        title={"special products"}
                        rows={2}
                        responsiveBreakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                },
                                550: {
                                    slidesPerView: 2,
                                },
                                1200: {
                                    slidesPerView: 3,
                                },
                            }
                        }
                    >
                        <CardBolder />
                    </SwiperGrid>

                    <SwiperCarousl
                        data={data}
                        numPerView={6}
                        title={"our popular products"}
                        responsiveBreakpoints={breakpointsCol6}
                    >
                        <CardLighter />
                    </SwiperCarousl>
                    {/* ----------- Products ------------ */}
                    <SwiperCarousl
                        data={dataLogos}
                        numPerView={6}
                        responsiveBreakpoints={breakpointsCol6}
                        statusCard={false}
                    >
                        <WrapperLogo />
                    </SwiperCarousl>

                    <SwiperCarousl
                        data={dataBlog}
                        numPerView={4}
                        responsiveBreakpoints={breakpointsCol4}
                    >
                        <CardBlog />
                    </SwiperCarousl>
                </div>
            </div>
        </div>
    )
}

export default Home
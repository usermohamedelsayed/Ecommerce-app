import { useEffect, useRef } from "react";
import "./Header.scss"
import HeaderBottom from "./HeaderBottom"
import HeaderTop from "./HeaderTop"
const handleHeightHeader = (headerTag) => {
    let prevScroll = window.scrollY;
    window.addEventListener("scroll", () => {
        let nextScroll = window.scrollY;
        if (prevScroll < nextScroll) {
            headerTag.style.top = "-26px"
        } else {
            headerTag.style.top = "0"
        }
        prevScroll = nextScroll
    })
}
const Header = () => {
    const refHeader = useRef()
    useEffect(() => {
        handleHeightHeader(refHeader.current)
    }, [])
    return (
        <div ref={refHeader} className='Header'>
            <HeaderTop />
            <HeaderBottom />
        </div>
    )
}

export default Header
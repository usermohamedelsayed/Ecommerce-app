import { useEffect, useRef } from "react"
import { CardBlog, NavShop } from "../../component"
import { dataBlog } from "../../data"
import "./Blogs.scss"
const Blogs = () => {
    const refMenueLinks = useRef()
    const handleHeightHeader = (refMenueLinks) => {
        let prevScroll = window.scrollY;
        window.addEventListener("scroll", () => {
            let nextScroll = window.scrollY;
            if (prevScroll < nextScroll) {
                refMenueLinks.style.top = "113px"
            } else {
                refMenueLinks.style.top = "140px"
            }
            prevScroll = nextScroll
        })
    }
    useEffect(() => {
        handleHeightHeader(refMenueLinks.current)
    }, [])
    return (
        <div className='Blogs'>
            <div className="container">
                <div ref={refMenueLinks} className="menueLinks">
                    <NavShop />
                </div>
                <ul className="cardsBlog">
                    {dataBlog.map(item =>
                        <li className="cardShadow" key={item.id}><CardBlog product={item} />
                        </li>)}
                </ul>
            </div>
        </div>
    )
}

export default Blogs
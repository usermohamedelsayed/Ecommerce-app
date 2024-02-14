import { useRef } from "react"
import productNotFound from "../../../assaset/no_product_found.jpg"
import "./CardBold.scss"
const CardBold = ({ product, cr, bg, shrinkText }) => {
    const refCardBold = useRef()
    const handleFlipImag = () => {
        refCardBold.current.classList.toggle("flip")
    }
    const handleErrorImg = (e) => {
        e.target.src = productNotFound
    }
    if (product) return (
        <div
            ref={refCardBold}
            onClick={handleFlipImag}
            className='CardBold'
            style={{ background: bg, color: cr }}
        >
            <div className='info'>
                <p style={{ color: cr }} className='catSmall'>{product.category.name}</p>
                <p style={{ color: cr }} className='title'>{
                    shrinkText ? product.title.slice(0, 9) + ".." : product.title}</p>
                <p style={{ color: cr }} className='desc'>{product.description.slice(0, 60) + ".."}</p>
            </div>
            <div className="images">
                <div className="front">
                    <img onError={handleErrorImg}
                        src={product.images[0]}
                        alt={"img" + product.category.name}
                    />
                </div>
                <div className="back">
                    <img onError={handleErrorImg}
                        src={product.images[1]}
                        alt={"img" + product.category.name}
                    />
                </div>
            </div>
        </div>
    )
}
export default CardBold
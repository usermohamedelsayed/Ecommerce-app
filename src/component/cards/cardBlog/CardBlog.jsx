import React from 'react'
import "./CardBlog.scss"
import { Link } from 'react-router-dom'
const CardBlog = ({ product }) => {
    return (
        <div className='CardBlog'>
            <img src={product.img} alt={"img" + product.id} />
            <div className="details">
                <small>{product.date}</small>
                <p className="title">{product.title}</p>
                <span className="desc">{product.desc}</span>
                <button className="btn">
                    <Link to={"/singleBlog/" + product.id}>read more</Link>
                </button>
            </div>
        </div>
    )
}

export default CardBlog
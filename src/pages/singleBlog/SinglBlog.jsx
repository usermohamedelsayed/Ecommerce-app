import React, { useEffect, useState } from 'react'
import "./SingleBlog.scss"
import NavShop from '../../component/navShop/NavShop'
import { useParams } from 'react-router'
import { dataBlog } from "../../data"
const SingleBlog = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState({})

    useEffect(() => {
        let selectedBlog = dataBlog.filter(item => +item.id === +id);
        setBlog(...selectedBlog)
    }, [id])
    return (
        <div className='SingleBlog'>
            <div className="container">
                <div className="menueLinks">
                    <NavShop />
                </div>
                <div className="detailsBlog">
                    {blog ? (
                        <>
                            <p className="title">{blog.title}</p>
                            <img src={blog.img} alt="imgBlog" />
                            <span>{blog.date}</span>
                            <p className="desc">{blog.desc}</p>
                        </>
                    ) : "error"}
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
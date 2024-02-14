import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearch } from '../../redux/sliceSearch'
import "./SearchPage.scss"
import { CardBolder } from '../../component'
const SearchPage = () => {
    const dispatch = useDispatch()
    const { valueInput } = useParams()
    const { data, loadding, error } = useSelector(state => state.sliceSearch)


    useEffect(() => {
        let inp = document.querySelector("input")
        if (!inp) return
        inp.focus()
        inp.value = valueInput || ""
        dispatch(fetchSearch())
    }, [valueInput, dispatch])
    if (loadding) return <div className='container SearchPage loadding'></div>
    if (error) return <div className='container SearchPage error'></div>
    return (
        <div className='SearchPage'>
            <div className="container">
                <p className="title">Results for: <span>{valueInput}</span> </p>
                <div className="prodcts">
                    {data.map(product => <CardBolder key={product.id} product={product} />)}
                </div>
                {!data.length ? <p className='found'>no products match your search</p> : ""}
            </div>
        </div>
    )
}

export default SearchPage
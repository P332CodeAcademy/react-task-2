import React, { useEffect, useState } from 'react'
import "./Products.css"
import axios from "axios"
import ProductCard from '../../Components/ProductCard/ProductCard'
import Category from '../../Components/Categories/Category'
function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(result => setProducts(result?.data))
    }, [])

    return (<>

        <Category />
        <div className='products-container'>
            <ProductCard products={products} />
        </div>
    </>
    )
}

export default Products
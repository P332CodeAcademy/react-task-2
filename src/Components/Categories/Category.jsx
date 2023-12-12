import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'

const Category = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then(result => setcategories(result?.data))
    }, [])
    return (
        <div className='categories-container'>
            <ul>
                {
                    categories?.map(category => (
                        <li key={category.id}>
                            <span>{category}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category
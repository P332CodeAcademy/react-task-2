import React from 'react'

const ProductCard = (props) => {
  return (
    props.products?.map(product => (
      <div className='card' key={product.id}>
        <img src={product?.image} alt="" />
        <h2>{product?.category}</h2>
      </div>
    ))
  )
}

export default ProductCard
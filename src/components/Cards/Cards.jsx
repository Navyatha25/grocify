import React from 'react'
import Button from '../Button/Button'
import { useCart } from '../CartContext/CartContext'



const Cards = ({id, name, price, image  }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
  console.log("ADDING PRODUCT:", id, name);
  addToCart({ id, name, price, image });
};

  return (
    <div className='bg-zinc-100 p-5'>
      <div className='w-full h-50'>
        <img src={image} className='w-full h-full object-contain mx-auto' />
      </div>

      <div className='text-center'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='text-2xl font-bold mt-4 mb-3'>${price.toFixed(2)}</p>
        <Button content="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  )

};

export default Cards;

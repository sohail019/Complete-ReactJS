import React from 'react'

export const ProductCard = ({productData}) => {
  console.log(productData)
  const {title, category, price, rating, images, description} = productData
  return (
    <div className="w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      
      <a href="#">
        <img
          src={images}
          alt="Product"
          className="h-2 w-20 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">{title}</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {category}
          </p>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {description}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
            <p>
              <p className="text-sm text-gray-600 cursor-auto ml-2">{rating}</p>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

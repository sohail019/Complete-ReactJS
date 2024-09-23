import axios from "axios";
import { useState, useEffect } from "react";
import { ProductCard } from "../src/ProductCard";

export const GetProduct = () => {

    const [data, setData] = useState([])
    const api = "https://dummyjson.com/products";

    const getProductData = async() => {
        try {
            const res = await axios.get(api)
            setData(res.data.products)
            
        } catch (error) {
            console.error("Error Status: ", error.status);
            console.error("Error Message: ", error.message);
        }
    }   
    useEffect(() => {
        getProductData()
    }, [])
  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {data.map((currProduct) => {
          return <ProductCard key={currProduct.id} productData={currProduct} />;
        })}
      </div>
    </>
  );
}

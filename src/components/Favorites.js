import Title from "./ui/Title"
import Products from "api/products.json"
import { useState, useEffect } from "react"
import ProductItem from "./ui/ProductItem";



export default function Favorites() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, [])
  return ( 
    <div>
        <Title>Favoriler</Title>
        <div className="grid grid-cols-3 2xl:grid-cols-9 xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 gap-0.1 rounded-lg overflow-hidden">
            {products && products.map(product => <ProductItem product={product}/>)}
        </div>
    </div>
  )
}


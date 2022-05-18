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
        <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
            {products && products.map(product => <ProductItem product={product}/>)}
        </div>
    </div>
  )
}


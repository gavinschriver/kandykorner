import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Products.css"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(po => <Product key={po.id} prod={po} />)
            }
        </div>
    )
    
}
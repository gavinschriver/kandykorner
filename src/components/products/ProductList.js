import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Products.css"
import { ProductTypeContext } from "./productTypes/ProductTypeProvider"

export const ProductList = () => {
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div className="products">
            {
                products.map(po => {
                    const pto = productTypes.find(pt => pt.id === po.productTypeId) || {}
                        
                    
                    return <Product key={po.id} prod={po} prodType={pto} /> 
            })
            }
        </div>
    )
    
}
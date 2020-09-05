import React, { useState, useEffect } from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8090/products?_expand=productType")
            .then(response => response.json())
            .then(setProducts) 
    }

    const addProduct = newProduct => {
        return fetch("http://localhost:8090/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(getProducts)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={{
            products, getProducts, addProduct
        }}>{props.children}</ProductContext.Provider>
    )
}
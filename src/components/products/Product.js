import React from "react"
import "./Products.css"

export const Product = ({ prod }) => (
    <section className="product">
        <div className="product__name">{prod.name}</div>
        <div className="product__price">{prod.price}</div>
        <div className="product__type">{prod.productTypeId}</div>
    </section>
)
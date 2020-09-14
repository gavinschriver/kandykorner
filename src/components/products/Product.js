import React, { useContext, useState, useEffect } from "react";
import { CustomerProductContext } from "../customersProducts/CustomerProductProvider";
import "./Products.css";

export const Product = ({ prod }) => {
  const { addCustomerProduct } = useContext(CustomerProductContext);

  const [product, setProduct] = useState({ productType: {} } || {})

  const [productTypeState, setProductTypeState] = useState(false)

  const showHideProductType = () => {
    if (!productTypeState) {
      setProductTypeState(true)
    }
    else if (productTypeState) {
      setProductTypeState(false)
    }
  }

  useEffect(() => {
    setProduct(prod)
  }, [])

  return (
    <section className="product" id={product.id}>
      <div className="product__name">{product.name}</div>
      <div className="product__price">{product.price}</div>
      {
        productTypeState ? 
          <div>Product Type: {product.productType.type}</div>
          : <div></div>
      }
      <button
        className="product__addTOCartButton"
        onClick={(e) => {
          e.preventDefault();
          addCustomerProduct({
            productId: parseInt(prod.id),
            customerId: parseInt(localStorage.getItem("kandy_customer")),
          });
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          showHideProductType()
        }
        }
      >Display Product Type?</button>
    </section>
  );
};

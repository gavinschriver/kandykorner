import React, { useContext } from "react";
import { CustomerProductContext } from "../customersProducts/CustomerProductProvider";
import "./Products.css";

export const Product = ({ prod, prodType }) => {
  const { addCustomerProduct } = useContext(CustomerProductContext);

  return (
    <section className="product" id={prod.id}>
      <div className="product__name">{prod.name}</div>
      <div className="product__price">{prod.price}</div>
      <div className="product__type">{prodType.type}</div>
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
    </section>
  );
};

import React, { useState, useEffect } from "react";

export const ProductTypeContext = React.createContext();

export const ProductTypeProvider = (props) => {
  const [productTypes, setProductTypes] = useState([]);

  const getProductTypes = () => {
    return fetch("http://localhost:8090/productTypes?_exapnd=products")
      .then((response) => response.json())
      .then(setProductTypes);
  };

  const addProductType = (newProductType) => {
    return fetch("http://localhost:8090/productTypes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductType),
    }).then(getProductTypes);
  };

  return (
    <ProductTypeContext.Provider
      value={{
        productTypes,
        getProductTypes,
        addProductType,
      }}
    >
      {props.children}
    </ProductTypeContext.Provider>
  );
};

import React, { useState, useEffect, createContext } from "react";

export const CustomerProductContext = React.createContext();

export const CustomerProductProvider = (propsObj) => {
  const [customersProducts, setCustomersProducts] = useState([]);

  const getCustomersProducts = () => {
    return fetch(`http://localhost:8090/customersProducts`)
      .then((res) => res.json())
      .then(setCustomersProducts);
  };

  const addCustomerProduct = (newCustomerProduct) => {
    return fetch("http://localhost:8090/customersProducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomerProduct),
    }).then(getCustomersProducts);
  };
    
    return (
        <CustomerProductContext.Provider value={{ customersProducts, getCustomersProducts, addCustomerProduct }}>
            {propsObj.children}
        </CustomerProductContext.Provider>
)
};

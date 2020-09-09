import React, { useContext, useEffect } from "react";
import { CustomerProductContext } from "../customersProducts/CustomerProductProvider";
import { ProductProvider, ProductContext } from "../products/ProductProvider";

export const CartList = () => {
  const { customersProducts, getCustomersProducts } = useContext(
    CustomerProductContext
  );
  const { products } = useContext(ProductContext);

  useEffect(() => {
    getCustomersProducts();
  }, []);

  let productIdInstances = [];

  let productsRepresented = [];

  const matchingCPOs = customersProducts.filter((cpo) => {
    return cpo.customerId === parseInt(localStorage.getItem("kandy_customer"));
  });

  matchingCPOs.forEach((mcpo) => {
    productIdInstances.push(mcpo.productId);
  });

  return (
    <table>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Price/Unit</th>
          <th>Number in Cart</th>
          <th>Product Total</th>
        </tr>
        {matchingCPOs.map((mcpo) => {
          const matchingProd =
            products.find((p) => mcpo.productId === p.id) || {};

          let matchingProdCount = productIdInstances.filter(
            (prodId) => prodId === matchingProd.id
          ).length;
            
            if (!productsRepresented.includes(matchingProd.id)) {

                productsRepresented.push(matchingProd.id);
            
                return (
                    <tr>
                        <td>{matchingProd.name}</td>
                        <td>${matchingProd.price}</td>
                        <td>{matchingProdCount}</td>
                        <td>{matchingProdCount * matchingProd.price}</td>
                    </tr>
                )
            }
              ;
        })}
      </tbody>
    </table>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { CustomerProductContext } from "../customersProducts/CustomerProductProvider";
import { ProductContext } from "../products/ProductProvider";
import {
  productTypes,
  ProductTypeContext,
} from "../products/productTypes/ProductTypeProvider";

export const CartList = () => {
  const { customersProducts, getCustomersProducts, removeCustomerProduct } = useContext(
    CustomerProductContext
  );

  const { productTypes } = useContext(ProductTypeContext);
  const { products } = useContext(ProductContext);

  const [divState, setDivState] = useState(false);

  // fuck with detailstate being object?
  const [detailState, setDetailState] = useState({ isShowing: false });

  useEffect(() => {
    getCustomersProducts();
  }, []);

  const divStateToggle = () => {
    divState
      ? setDivState(false)
      : setDivState(true)
  }

  // DETAOL STATE IS AN OBJ IT LIVESS
  const detailStateToggle = () => {
    detailState.isShowing
      ? setDetailState({
          isShowing: false,
        })
      : setDetailState({
          isShowing: true,
          randomDynamicVar: 5,
      })
      alert(detailState.newProp)
      ;
  };

  let productIdInstances = [];

  let productsRepresented = [];

  const matchingCPOs = customersProducts.filter((cpo) => {
    return cpo.customerId === parseInt(localStorage.getItem("kandy_customer"));
  });

  matchingCPOs.forEach((mcpo) => {
    productIdInstances.push(mcpo.productId);
  });

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          divStateToggle();
        }}
      >
        I want this button to do something
      </button>
      <div>{divState ? <p>oh FUCKK yea</p> : <div></div>}</div>
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
                  <td>
                    <span
                      id={matchingProd.id}
                      onMouseOver={(e) => {
                        detailState.newProp = e.target.id;
                        detailStateToggle();
                      }}
                    >
                      {matchingProd.name}
                    </span>
                  </td>
                  <td>${matchingProd.price}</td>
                  <td>{matchingProdCount}</td>
                  <td>{matchingProdCount * matchingProd.price}</td>
                  <td><button onClick={e => {
                    e.preventDefault()
                    const matchingCPOsForThisProduct = matchingCPOs.filter(mCPO => {
                      return mCPO.productId === matchingProd.id
                    })
                    removeCustomerProduct(parseInt(matchingCPOsForThisProduct[0].id))
                  }}
                  
                  >Decrease Item Ct</button></td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div>
        {detailState.isShowing ? (
          <>
            <p>{"mannn"}</p>
            <p>{detailState.randomDynamicVar}</p>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "./ProductProvider";
import { Product } from "./Product";
import "./Products.css";
import { ProductTypeContext } from "./productTypes/ProductTypeProvider";

export const ProductList = () => {
  const { products, getProducts, productSearchTerms } = useContext(
    ProductContext
  );
  const { productTypes } = useContext(ProductTypeContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    setFilteredProducts(products.filter(p => p.name.includes(productSearchTerms)))
  }, [productSearchTerms]);

  return (
    <div className="products">
      {filteredProducts.map((po) => {
        const pto = productTypes.find((pt) => pt.id === po.productTypeId) || {};

        return (
          <>
            <div className="productContainer">
              <Product key={po.id} prod={po} prodType={pto} />
            </div>
          </>
        );
      })}
    </div>
  );
};

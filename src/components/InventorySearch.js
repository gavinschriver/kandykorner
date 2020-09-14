import React, { useContext } from "react";
import { ProductContext } from "./products/ProductProvider"

export const InventorySearch = () => {

  const { setProductSearchTerms } = useContext(ProductContext)

  return (
    <div className="searchDiv">
      <form>
        <input
          type="text"
          placeholder="search terms"
          name="inventorySearch"
                  id="inventorySearch"
                  onChange={(e) => {
                    setProductSearchTerms(e.target.value)
                  }}
        ></input>
      </form>
    </div>
  );
};

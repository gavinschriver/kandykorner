import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./locations/LocationProvider";
import { ProductProvider } from "./products/ProductProvider";
import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";
import { ProductTypeProvider } from "./products/productTypes/ProductTypeProvider";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeProvider } from "./employees/EmployeeProvider";

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <ProductProvider>
        <ProductTypeProvider>
          <Route path="/products">
            <ProductList />
          </Route>
        </ProductTypeProvider>
      </ProductProvider>

      <LocationProvider>
        <EmployeeProvider>
          <Route
            exact
            path="/employees"
            render={(props) => <EmployeeList {...props} />}
          ></Route>
          <Route exact path="/employees/hire" render={props => <EmployeeForm {...props}/>}>
          </Route>
        </EmployeeProvider>
      </LocationProvider>
    </>
  );
};

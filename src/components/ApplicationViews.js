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
import { CustomerProductProvider } from "./customersProducts/CustomerProductProvider";
import { CartList } from "./cart/CartList";
import { EmployeeTestForm } from "./employees/EmployeeTestForm";
import { InventorySearch } from "./InventorySearch";
import { EmployeesPlayersProvider } from "./employeesPlayers/EmployeePlayerProvider";
import { PlayerProvider } from "./players/PlayersProvider";

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
          <CustomerProductProvider>
            <EmployeeProvider>
              <Route path="/products">
                <ProductList />
                <InventorySearch />
              </Route>
            </EmployeeProvider>
          </CustomerProductProvider>
        </ProductTypeProvider>
      </ProductProvider>

      <EmployeeProvider>
        {/* <EmployeesPlayersProvider> */}
          <PlayerProvider>
            <LocationProvider>
              <Route
                exact
                path="/employees"
                render={(props) => (
                  <>
                    <EmployeeList {...props} />
                    <EmployeeTestForm />
                  </>
                )}
              ></Route>
              <Route
                exact
                path="/employees/hire"
                render={(props) => <EmployeeForm {...props} />}
              ></Route>
            </LocationProvider>
          </PlayerProvider>
        {/* </EmployeesPlayersProvider> */}
      </EmployeeProvider>

      <CustomerProductProvider>
        <ProductTypeProvider>
          <ProductProvider>
            <Route
              exact
              path="/cart"
              render={(props) => <CartList {...props} />}
            ></Route>
          </ProductProvider>
        </ProductTypeProvider>
      </CustomerProductProvider>
    </>
  );
};

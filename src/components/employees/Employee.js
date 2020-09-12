import React, { useContext } from "react";
import "./Employees.css";
import { EmployeeContext } from "./EmployeeProvider"

export const Employee = ({ EO }) => {

  const { yaFired } = useContext(EmployeeContext)

  return (
    <div className="employee">
      <div className="employee__name">name: {EO.name}</div>
      <div>
        Employee Location info:
        {Object.entries(EO.location).map((entry) => {
          const PropNameRaw = entry[0];
            let PropNameFixed;
            
          switch (PropNameRaw) {
            case "id":
              PropNameFixed = "Store Id";
              break;
            case "sqft":
              PropNameFixed = "Store Square Feet";
              break;
            case "handicap":
                  PropNameFixed = "Handicap Accessible?";
                  entry[1] = "true"
              break;
            case "address":
              PropNameFixed = "Store Address";
          }

            
          return (
            <div className="location__details">
              {PropNameFixed}: {entry[1]}
            </div>
          );
        })}
      </div>
      <button onClick={() => {
        const employeeId = parseInt(EO.id)
        yaFired(employeeId)
      }}
      >YAFIREDDD</button>
    </div>
  );
};

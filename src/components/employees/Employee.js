import React from "react";
import "./Employees.css";

export const Employee = ({ EO }) => {
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
    </div>
  );
};

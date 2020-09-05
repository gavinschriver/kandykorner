import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import { LocationContext } from "../locations/LocationProvider";
import "./Employees.css";

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <>
      <article className="employeeList">
        <h1>EMPLOYEES WILL B HERE SOON...</h1>
        <section className="employees">
          {employees.map((e) => {
            return <Employee key={e.id} EO={e} />;
          })}
        </section>
        <button
          onClick={() => {
            props.history.push("/employees/hire");
          }}
        >
          Add a dang HEMPPLOYEE
        </button>
      </article>
    </>
  );
};

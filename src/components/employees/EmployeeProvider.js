import React, { useState, useEffect, createContext } from "react";

export const EmployeeContext = React.createContext();

export const EmployeeProvider = (propsObj) => {
  const [employees, setEmployees] = useState([]);

  const [editEmployeeId, setEditEmployeeId] = useState(0);

  useEffect(() => {
    // alert('well thats interesting')
  }, [])

  const getEmployees = () => {
    return fetch(`http://localhost:8090/employees?_expand=location&_embed=employeesPlayers`)
      .then((res) => res.json())
      .then(setEmployees);
  };

  const addEmployee = (newEmployee) => {
    return fetch("http://localhost:8090/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee),
    }).then(getEmployees);
  };

  const yaFired = (yaFiredId) => {
    return fetch(`http://localhost:8090/employees/${yaFiredId}`, {
      method: "DELETE",
    }).then(getEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        getEmployees,
        addEmployee,
        yaFired,
        editEmployeeId,
        setEditEmployeeId,
      }}
    >
      {propsObj.children}
    </EmployeeContext.Provider>
  );
};

import React, { useState, useEffect } from "react";

export const EmployeesPlayersContext = React.createContext();

export const EmployeesPlayersProvider = (propsObj) => {
  const [employeesPlayers, setEmployeesPlayers] = useState([]);

  useEffect(() => {
    // alert('well thats interesting')
  }, [])

  const getEmployeesPlayers = () => {
    return fetch(`http://localhost:8090/employeesPlayers?_expand=player&_expand=employee`)
      .then((res) => res.json())
      .then(setEmployeesPlayers);
  };

  const addEmployeePlayer = (newEmployeePlayer) => {
    return fetch("http://localhost:8090/employeesPlayers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployeePlayer),
    }).then(getEmployeesPlayers);
  };

  const deleteEmployeePlayer = (EPID) => {
    return fetch(`http://localhost:8090/employeesPlayers/${EPID}`, {
      method: "DELETE",
    }).then(getEmployeesPlayers);
  };

  return (
    <EmployeesPlayersContext.Provider
      value={{
        employeesPlayers,
        getEmployeesPlayers,
        addEmployeePlayer,
        deleteEmployeePlayer,
      }}
    >
      {propsObj.children}
    </EmployeesPlayersContext.Provider>
  );
};

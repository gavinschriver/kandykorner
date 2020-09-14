import React, { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { PlayerContext } from "../players/PlayersProvider"
import "./Employees.css";

export const Employee = ({ EO }) => {
  const { yaFired, setEditEmployeeId } = useContext(EmployeeContext);
  const { players, getPlayers} = useContext(PlayerContext)

  const [employee, setEmployee] = useState({ employeesPlayers: [], location: {} } || {});
  const [playersArray, setPlayersArray] = useState([])

  const [showHideMatchingPlayers, setShowHideMatchingPlayers] = useState(false)

  const matchingPlayersToggle = () => {
    if (!showHideMatchingPlayers) {
      setShowHideMatchingPlayers(true)
    } else if (showHideMatchingPlayers) {
      setShowHideMatchingPlayers(false)
    }
  }

  useEffect(() => {
    getPlayers()
      .then(() => {
        setEmployee(EO)
      })
  }, [])

  useEffect(() => {
    setPlayersArray(players)
  }, [players])

  return (
    <div className="employee">
      <div className="employee__name">name: {employee.name}</div>
      <div>
        Employee Location info:
        {Object.entries(employee.location).map((entry) => {
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
              entry[1] = "true";
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
      <button
        onClick={() => {
          const employeeId = parseInt(employee.id);
          yaFired(employeeId);
        }}
      >
        YAFIREDDD
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setEditEmployeeId(parseInt(employee.id));
        }}
      >
        Edit?
      </button>
      <button
        onClick={e => {
          e.preventDefault()
          matchingPlayersToggle()
        }}
      >Show Playerz</button>
      {
        showHideMatchingPlayers ?
          <div>AH SHIT ITS AN ARRAY{
            employee.employeesPlayers.map(epo => {
              return <div>{epo.playerId}</div>
            })
          }</div> 
          : <div></div>
      }
    </div>
  );
};

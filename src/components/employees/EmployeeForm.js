import React, { useContext, useEffect, useRef } from "react";
import { LocationContext } from "../locations/LocationProvider";
import { EmployeeContext } from "./EmployeeProvider";

export const EmployeeForm = () => {
    const { locations } = useContext(LocationContext);
    const { addEmployee } = useContext(EmployeeContext);

  const hireName = useRef(null);
  const hireLoc = useRef(null);
  const hireIsManager = useRef("0");
  const hireIsFullTime = useRef("0");
  const hirePay = useRef(null);

  const addHire = () => {
    if (
      hireIsManager.current.value !== "coocoobananapants" &&
      hireIsFullTime.current.value !== "coocoobananapants"
    ) {
      const newHire = {
        name: hireName.current.value,
        locationId: parseInt(hireLoc.current.value),
        manager: JSON.parse(hireIsManager.current.value),
        fulltime: JSON.parse(hireIsFullTime.current.value),
        payrate: parseFloat(hirePay.current.value),
      };

      if (
        hireName.current.value !== "" &&
        hireLoc.current.value &&
        hirePay.current.value
      ) {
        addEmployee(newHire);
      }
    } else alert("please fill out all forms to my utter satisfaction");
  };

  return (
    <form>
      <input type="text" placeholder="enter employee name" ref={hireName} />
      <select ref={hireLoc}>
        <option value="">Please choose a location</option>
        {locations.map((l) => (
          <option value={l.id}>{l.address}</option>
        ))}
      </select>
      <select ref={hireIsManager}>
        <option value="coocoobananapants">Manager?</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <select ref={hireIsFullTime}>
        <option value="coocoobananapants">Full or Part Time</option>
        <option value={true}>Full-Time</option>
        <option value={false}>Part-Time</option>
      </select>
      <input type="number" placeholder="enter hourly pay" ref={hirePay}></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          addHire();
        }}
      >
        YA HIRED
      </button>
    </form>
  );
};

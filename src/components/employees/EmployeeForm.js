import React, { useContext, useEffect } from "react";
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeForm = () => {

const { locations } = useContext(LocationContext)

  return (
    <form>
          <input type="text" placeholder="enter employee name" />
          <select>
              <option value="">Please choose a location</option>
              {
                  locations.map(l => <option>{l.address}</option>)
              }
          </select>
          <select>
              <option>Manager?</option>
              <option>Yes</option>
              <option>No</option>
          </select>
          <select>
              <option>Full or Part Time</option>
              <option>Full-Time</option>
              <option>Part-Time</option>
          </select>
          <input type="number" placeholder="enter hourly pay"></input>
    </form>
  );
};

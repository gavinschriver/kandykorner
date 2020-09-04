import React from "react"
import "./Locations.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__sqft">{location.sqft}</div>
        <div className="location__name">{location.id}</div>
  </section>   
)
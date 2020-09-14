import React from "react"
import "./Locations.css"

export const Location = ({ location, id }) => (
    <section className="location">
        <h3 className="location__address">Address: {location.address}</h3>
        <div className="location__sqft">Square Feet: {location.sqft}</div>
        <div className="location__handicap">{location.handicap}</div>
  </section>   
)
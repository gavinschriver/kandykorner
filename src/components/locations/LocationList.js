import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import "./Locations.css"

export const LocationList = () => {
    const { locations } = useContext(LocationContext)

    return (
        <div className="locations">
            {
                locations.map(lo => <Location key={lo.id} location={lo} />)
            }
     </div>   
    )
}
import React, { useState, useEffect } from "react"

export const LocationContext = React.createContext()

export const LocationProvider = (props) => {

    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8090/locations?_embed=employees")
            .then(res => res.json())
            .then(setLocations)
    }

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <LocationContext.Provider value={{
            locations, getLocations
        }}>{props.children}</LocationContext.Provider>
    )
}
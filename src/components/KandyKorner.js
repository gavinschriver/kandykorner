import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"

export const KandyKorner = () => (
    <>
        <h1>HALLO VURLD</h1>
    <LocationProvider>
        <LocationList/>
    </LocationProvider>
    </>
    
)
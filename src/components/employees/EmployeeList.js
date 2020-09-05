import React, { useContext, useEffect } from "react"
import Route from "react-router-dom"
// import { EmployeeContext } from "./EmployeeProvider"
// import { Employee } from "./Employee"
import "./Employees.css"
// import { EmployeeTypeContext } from "./productTypes/ProductTypeProvider"

export const EmployeeList = (props) => {
    return (
        <>
            <h1>EMPLOYEES WILL B HERE SOON...</h1>
            <button onClick={() => {props.history.push("/employees/hire")}}>Add a dang HEMPPLOYEE</button>
        </>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeTestForm = () => {

    const { editEmployeeId, employees } = useContext(EmployeeContext)

    const [employeeToFuckWith, setEmployeeToFuckWith] = useState({})

    useEffect(() => {
        setEmployeeToFuckWith(employees.find(e => e.id === editEmployeeId) || {})
    }, [editEmployeeId])


    return (<form>
        <fieldset>
            <div>{employeeToFuckWith.name}</div>
            <input type="text" />
        </fieldset>
    </form>)
}
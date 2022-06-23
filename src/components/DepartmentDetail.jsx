import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DepartmentDetail = () => {
    const [dept, setDept] = useState({});

    let { id } = useParams()

    useEffect(() => {
        getDepartmentById(id)
    }, [])

    function getDepartmentById(id) {
        axios.get(`http://localhost:8080/departments/${id}`)
            .then(response => {
                setDept(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <div>Department id is {id}</div>
            <h1>{dept.dep_name}</h1>
            <h2>{dept.team_id}</h2>
        </>
    )
}

export default DepartmentDetail
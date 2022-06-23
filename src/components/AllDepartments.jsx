import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Department from './Department'
import DepartmentForm from './DepartmentForm'

const AllDepartments = () => {

    const [departments,setDepartments] = useState([]);

    useEffect(()=>{
        getAllDepartments()
    },[])
    
    function getAllDepartments(){
        axios.get('http://localhost:8080/departments')
        .then(response=>{
           setDepartments(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    
    let deptList=  departments.map(dept => 
            <div key={dept.dep_id}>
                <Department dept = {dept}/>
            </div>)
    

    const addDepartment = (dept)=>{
        axios.post('http://localhost:8080/departments', dept)
        .then(response=>{
            getAllDepartments();
        })
        .catch(error=>{
            console.log(error)
        })
        .then(()=>{
            console.log("Always Executed")
        })
    }


    return (
        <>
        <h1>AllDepartments: </h1>
        <Container>
            <Row>
            <Col>{deptList}</Col>
            <Col><DepartmentForm submitHandler = {addDepartment} /></Col>
            </Row>
        </Container>
       
        </>
    )
}

export default AllDepartments
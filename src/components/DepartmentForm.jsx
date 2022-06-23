
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

const DepartmentForm = (props) => {
    const [deptName, setDeptName] = useState('');
    const [teamId, setTeamId] = useState('');

    const addDepartment = (e) =>{
        e.preventDefault();
        let dept = {
            "dep_name" : deptName,
            "team_id" : teamId
        }
        console.log(dept);
        props.submitHandler(dept);
    }

  return (
    <Form onSubmit={addDepartment}>
    <Form.Group className="mb-3" controlId="formDeptName">
      <Form.Label>Department Name</Form.Label>
      <Form.Control type="text" placeholder="Enter department name" value={deptName}
       onChange ={event=>setDeptName(event.target.value)} />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formTeamId">
      <Form.Label>Team Id</Form.Label>
      <Form.Control type="text" placeholder="Enter team id" value={teamId}
      onChange ={event=>setTeamId(event.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default DepartmentForm
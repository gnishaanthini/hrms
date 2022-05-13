import React from 'react';
import Table from 'react-bootstrap/Table';


function ViewLeave(){

  return(
    <div style={{
      display: 'flex',
      margin: 'auto',
      width: 700,
      padding: 30
    }}>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Start Day of Absence</th>
      <th>Duration</th>
      <th>Type of Leave</th>
      <th>Reason</th>
      <th>Document</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>sick</td>
      <td>file</td>
    </tr>
   
  </tbody>
</Table>
    </div>
  )
}


export default ViewLeave;
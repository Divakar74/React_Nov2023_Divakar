import React,{ useState } from "react";
function Employee(){
  const[employee]= useState([
    {
        id:1,
        name:"Ram",
        age:34,
        salary:20000,
    },
    {
        id:2,
        name:"Karthick",
        age:40,
        salary:30000,
    },
    {
        id:3,
        name:"John",
        age:25,
        salary:40000,
    },
    {
        id:4,
        name:"Michael",
        age:28,
        salary:80000,
    },
    {
        id:5,
        name:"Ragul",
        age:29,
        salary:90000,
    }
  ])
  return(
    <div>
        <h1>Employee Details</h1>
        <hr></hr>
        <table cellPadding={"10px"} cellSpacing={"10px"} style={{marginLeft:"41%",border:"2px solid black"}}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
           {
            employee.map((emp) =>(
                <tr>
                    <th>{emp.id}</th>
                    <td>{emp.name}</td>
                    <td>{emp.age}</td>
                    <td>{emp.salary}</td>
                </tr>
            ))
           }
        </table>
    </div>
  );
}
export default Employee;
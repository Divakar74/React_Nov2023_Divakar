import React, { useState } from "react";
function Listitems(){
  const[students]=useState([
    {
        id:1,
        name:"John",
        age:22,
    },
    {
        id:2,
        name:"Mike",
        age:23,
    },
    {
        id:3,
        name:"Jack",
        age:24,
    },
    {
        id:4,
        name:"Dravid",
        age:25,
    }
  ])
  return(
    <div>
        <h1>ListItems</h1>
        <hr></hr>
        <ul style={{listStyleType: "none"}}>
        {students.map((student) =>(
          <li key={student.id}>
            <h2>ID: {student.id}</h2>
            <p>Name: {student.name}</p>
          </li>
        ))}
        </ul>
    </div>
  );
}
export default Listitems;
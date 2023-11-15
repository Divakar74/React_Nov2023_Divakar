import {useState} from 'react'
function StateProps()
{
    const[name,setName]=useState("Divakar");
    const[num,setNumber]=useState(14);
    const[student,setStudent]=useState({name:"Divakar",age:"20"})
    
     const namehandler =()=>
     {
        setName("Ramesh");
     };
     const numhandler =()=>
     {
        let val=num;
        setNumber(++val);
     };
    return(
        <div>
            <h1>STATE PROPS</h1>
            <hr style={{color:"black"}}></hr>

            <h2>Hi {name}</h2>
            <h2>Number is {num}</h2>
           
            <h2>Student name is {student.name} and age is {student.age}</h2>

            <button style={{backgroundColor:"navy",color:"white"}} onClick={namehandler}>CHANGE NAME</button><br></br><br></br>
            <button style={{backgroundColor:"navy",color:"white"}} onClick={numhandler}>CHANGE NUMBER</button>

        </div>
    )
}
export default StateProps
import {useState} from 'react'
function Toggle()
{
    const[name,setName]=useState("kaioken");
    const namehandler=()=>
    {
        if(name === 'kaioken')
        {
            setName("SuperSaiyan");
        }
        else
        {
            setName("kaioken");
        }
    }
    return(
        <div>
            <h1>TOGGLE APP</h1>
            <hr></hr>
            <h1>{name}</h1>
            <button onClick={namehandler}>onclick</button>
        </div>
    )
}
export default Toggle
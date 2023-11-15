import  {useState} from 'react'

function Togglemessage()
{
    const[showMessage,setShowMessage]=useState(false);
    const display =()=>
    {
        setShowMessage(!showMessage);
    }
    return(
        <div>

             <h1>TOGGLE APP</h1>

        <hr></hr>
             <button onClick={display} style={{backgroundColor:"navy",color:"white"}}>
                {showMessage?"HideMessage":"ShowMessage"}
             </button>
             {showMessage && <p>HELLO</p>}
        </div>
    );
}
export default Togglemessage
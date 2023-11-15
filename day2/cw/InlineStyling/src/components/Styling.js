const Styling=()=>{
    const ps={
        color:"darkblue",
        backgroundColor:"lightblue",
        padding:"10px",
        border:"1px solid blue",
        fontSize:"16px",
        borderRadius:"5px"
    }
    return(
        <div>
            <h1 style={{color:"green"}}>Inline Style in JSX Example.</h1>
            <p style={ps}>This is a paragraph with Inline styles applied.</p>
        </div>
    );
}
export default Styling;
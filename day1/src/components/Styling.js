const Styling= ()=>{
    const ps={
        color:"darkblue",
        backgroundColor:"lightblue"
    }
    return(
        <div>
        <h1 style={{color:"green"}}>Inline Style in JSX Example</h1>
        <p style={ps}>This is a paragraph with inline styles applied.</p>
        </div>
    );
}
export default Styling;
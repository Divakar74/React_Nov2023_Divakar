import { TextField } from '@mui/material';
export default function Fruit()
{
    return(
        <div>
            <h1>Enter your Name and Favourite Fruit</h1>
            <TextField id="standard-basic" label="Name" variant="standard" />
            <br></br><br></br>
        </div>
    );
}
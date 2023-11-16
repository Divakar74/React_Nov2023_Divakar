import React, { useState } from 'react';
import { TextField, Autocomplete, Button, Typography, Box } from '@mui/material';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const Form = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && selectedFruit) {
      setMessage(` Hello, ${name}! Your favorite fruit is ${selectedFruit}. `);
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Enter Your Name and select Favorite fruit
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Autocomplete
          options={fruitOptions}
          value={selectedFruit}
          onChange={(e, newValue) => setSelectedFruit(newValue)}
          renderInput={(params) => <TextField {...params} label="Favorite Fruit" fullWidth margin="normal" />}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        {message && (
          <Box mt={2}>
            <Typography variant="subtitle1">{message}</Typography>
          </Box>
        )}
      </form>
    </div>
  );
};

export default Form;
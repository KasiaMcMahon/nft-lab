import React, { useState } from 'react';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const defaultValues = {
    name: "",
    age: 20,
};

const Form = () => {
    const [formValues, setFormValues] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };
    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="name-input"
                        name="name"
                        label="Name"
                        type="text"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formValues.age}
                            label="Age"
                            onChange={handleInputChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>

                    </FormControl>
                </Grid>


                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>

            </Grid>
        </form>
    );
};
export default Form;
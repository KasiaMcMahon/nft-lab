import logo from './logo.svg';
import './App.css';
import './App.css';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Form from './Form.js'



function CheckboxExample() {
  return (
    <div>
      <Checkbox
        />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
        <TextField
            variant="outlined"
            color="secondary"
            label="Text Field"
          />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <Button onClick={()=>alert('You clicked a button')}
        size="medium"
        variant="contained"
        color="secondary">
          Hello React</Button>



      </header>
    </div>
  );
}

export default App;

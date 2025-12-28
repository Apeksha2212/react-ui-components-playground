import React, { useState } from 'react';
import PrimaryButton from './Components/buttons/PrimaryButton';
import OutlineButton from './Components/buttons/OutlineButton';
import IconButtonCustom from './Components/buttons/IconButtonCustom';
import TextInput from './Components/forms/TextInput';
import SelectInput from './Components/forms/SelectInput';
import FormExample from './Components/forms/FormExample';
import { Button, Typography } from '@mui/material';
import CustomModal from './Components/modal/CustomModal';

function App() {
    const [open, setOpen] = useState(false);
  return (
    <div className="App">
         Primary Button 
         <PrimaryButton label="Click Me" onClick={() => alert('Button Clicked!')} />
         <OutlineButton label="Outline Me" onClick={() => alert('Outline Button Clicked!')} />
          <IconButtonCustom label="Outline Me" onClick={() => alert('Outline Button Clicked!')} />
          <TextInput label='click me' value='type here' onChange={()=>alert("cheage")}></TextInput>
         <SelectInput label='click me' value="type here" options={["value", "test", "sample"]} onChange={(e) => alert(e.target.value)}/>
          <FormExample ></FormExample>
          <Button variant="contained" onClick={() => setOpen(true)}> Open Modal </Button>
         <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        title="User Details"
      >
        <Typography variant="body1">
          This is a reusable custom modal component.
        </Typography>

        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
      </CustomModal>

    </div>
  );
}

export default App;

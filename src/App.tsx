import React from 'react';
import PrimaryButton from './Components/buttons/PrimaryButton';
import OutlineButton from './Components/buttons/OutlineButton';
import IconButtonCustom from './Components/buttons/IconButtonCustom';
import TextInput from './Components/forms/TextInput';

function App() {
  return (
    <div className="App">
         Primary Button 
         <PrimaryButton label="Click Me" onClick={() => alert('Button Clicked!')} />
         <OutlineButton label="Outline Me" onClick={() => alert('Outline Button Clicked!')} />
          <IconButtonCustom label="Outline Me" onClick={() => alert('Outline Button Clicked!')} />
          <TextInput label='click me' value='type here' onChange={()=>alert("cheage")}></TextInput>
    </div>
  );
}

export default App;

import React from 'react';
import PrimaryButton from './Components/buttons/PrimaryButton';
import OutlineButton from './Components/buttons/OutlineButton';
import IconButtonCustom from './Components/buttons/IconButtonCustom';

function App() {
  return (
    <div className="App">
         Primary Button 
         <PrimaryButton label="Click Me" onClick={() => alert('Button Clicked!')} />
         <OutlineButton label="Outline Me" onClick={() => alert('Outline Button Clicked!')} />
         <IconButtonCustom label="Icon" onClick={() => alert('Icon Button Clicked!')} />

    </div>
  );
}

export default App;

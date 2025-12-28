import React from 'react';
import PrimaryButton from './Components/buttons/PrimaryButton';

function App() {
  return (
    <div className="App">
         Primary Button 
         <PrimaryButton label="Click Me" onClick={() => alert('Button Clicked!')} />
    </div>
  );
}

export default App;

import React from 'react';
import Img from './Img';


function App() {
  return (
    <div className="App">
      
        <Img  className = "m circle"
              type="circle"
              size="60x60"
              src="./img/dog.jpg" 
              alt="avatar"  />
      
    </div>
  );
}


export default App;
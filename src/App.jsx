import React from 'react';
import Img from './Img';


function App(props) {
  return (
    <div className="App">
      
        <Img  className = "imgItem m circle"
              src="./img/dog.jpg" 
              alt="avatar"  />
      
    </div>
  );
}


export default App;
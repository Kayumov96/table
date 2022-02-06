import React from 'react';
import ReactDOM from 'react-dom';
import State from './State.jsx';
import Rendering from './Rendering.jsx'


ReactDOM.render(
  <React.StrictMode>
    <Rendering/>
    {/* <State/> */}
  </React.StrictMode>,
  document.getElementById('root')
);



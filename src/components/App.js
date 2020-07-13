import React from 'react';
import './App.scss';
const arr = ['7', '8', '9', '-', '+', '4', '5', '6', '1', '2', '3'
];
function App() {
  return (
    <div className="App my-auto">
      <div id='display' className='display col-12 mx-auto my-2'>0</div>

        <Butt />
   
    </div>
  );
}

function Butt() {
  return (
    <div className='num-buttons col-xs-12 row m-auto d-flex justify-content-start'>
      <div type='button' className='col-4 m-1 p-1 btn btn-primary'>AC</div>
      <div type='button' className='col-3 m-1 p-1 btn btn-primary'>/</div>
      <div type='button' className='col-3 m-1 p-1 btn btn-primary'>X</div>
      {arr.map((val, i) => (
        <div key={i} type='button' className='col-3 m-1 p-1 btn btn-success'>{val}</div>
      ))}
      <div type='button' className='col-3 btn m-1 p-1 btn-primary'>=</div>
      <div type='button' className='col-3 btn m-1 p-1 btn-primary '>0</div>
      <div type='button' className='col-3 btn m-1 p-1 btn-primary '>.</div>
      
    </div>
  );
}

export default App;

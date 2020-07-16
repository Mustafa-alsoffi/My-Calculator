import React from 'react';
import './App.scss';
const arr = ['7', '8', '9', '4', '5', '6', '1', '2', '3'
];
function App() {
  return (
    <div className="App col-xs-11 col-sm-6 col-md-7 my-auto mx-auto">
      <div className='container-fluid'>
              <div className='row'>
        <div id='display' className='display col-12 mx-auto'>0</div>
      </div>
      </div>

  

        <Butt />

    </div>
  );
}

function Butt() {
  return (
    <div className='keys-container container-fluid'>


    <div className='container-fluid'>
            <div className='parentrow row justify-content-center'>
        <div type='button' className='clear col-5 my-1 mr-2 p-2'>AC</div>
        <div type='button' className='operator-division col-3 m-2 my-2 p-1 mr-5'>/</div>

      </div>
    </div>


      <div className='row ml-1 g-0'>

        <div className='box-1 col-9'>
          <div className='row row-cols-4 g-0 justify-content-center'>
            {arr.map((val, i) => (
              <div key={i} type='button' className='btn col-3 m-2'>{val}</div>

            ))}
            <div type='button' className='zero btn col m-2'><span>0</span></div>

            <div type='button' className='btn col-3 m-2'>.</div>
          </div>


        </div>

        <div className='box-2 col-3'>

          <div type='button' className='operator m-2'>x</div>
          <div type='button' className='operator m-2'>-</div>
          <div type='button' className='operator m-2'>+</div>
          <div type='button' className='equal'>=</div>


        </div>
      </div>

    </div>
  );
}

export default App;

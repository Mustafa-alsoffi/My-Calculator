import React from 'react';
import './App.scss';
const arr = ['7', '8', '9', '4', '5', '6', '1', '2', '3'
];
function Calculator() {
  return (
    <div className="Calculator col-xs-11 col-sm-6 col-md-6 my-auto mx-auto">
      <div className='container-fluid'>
              <div className='row'>
        <div id='display' className='display col-12 mx-auto'>0</div>
      </div>
      </div>

  

        <Keys />

    </div>
  );
}

function Keys() {
  return (
    <div className='keys-container container-fluid'>


    <div className='container-fluid'>
            <div className='row justify-content-center'>
        <div type='button' className='clear col-5 my-1 mr-2 p-2'>AC</div>
        <div type='button' className='operator-division col-3 m-2 my-2 p-1 mr-5'>/</div>

      </div>
    </div>


      <div className='row ml-1 g-0'>

        <div className='col-9'>
          <div className='row row-cols-4 g-0 justify-content-center'>
            {arr.map((val, i) => (
              <div key={i} type='button' className='btn col-3 m-2'>{val}</div>

            ))}
            <div type='button' className='zero btn col m-2'><span>0</span></div>

            <div type='button' className='btn col-3 m-2'>.</div>
          </div>


        </div>

        <div className='col-3'>

          <div type='button' className='operators m-2'>x</div>
          <div type='button' className='operators m-2'>-</div>
          <div type='button' className='operators m-2'>+</div>
          <div type='button' className='equal d-flex justify-content-center align-items-center'>=</div>


        </div>
      </div>

    </div>
  );
}

export default Calculator;

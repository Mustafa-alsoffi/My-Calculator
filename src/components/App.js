import React, { useState} from 'react';
import './App.scss';
const arr = ['7', '8', '9', '4', '5', '6', '1', '2', '3'
];


const valuesArr = [];



function Calculator() {

  const [num, setNum] = useState();


  return (
    <div className="Calculator col-xs-11 col-sm-6 col-md-5 my-auto mx-auto">
      <div className='container-fluid'>
        <div className='row'>
          <div id='display' className='display col-12 mx-auto'>{num}</div>
        </div>
      </div>

      <Keys set={setNum} />

    </div>
  );
}

function Keys(props) {
  const getValue = (event) => {
    // Received the value here
    if (event.target.value != '=' && event.target.value != 'ac') valuesArr.push(event.target.value);
    switch (event.target.value) {
      case '=':

        try {
          props.set(eval(valuesArr.join('')))
          valuesArr.length = 0;
        } catch {
          console.log('Incomplete expression')
        }
        break;
      case 'ac':
        valuesArr.length = 0;
        props.set('0')
        break;
      default:

        props.set(valuesArr.join(''))
    }

  };

  return (
    <div className='keys-container container-fluid'>

      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <button value='ac' onClick={getValue} className='clear col-5 my-1 mr-2 p-2'>AC</button>
          <button value='/' onClick={getValue} className='operator-division col-3 m-2 my-2 p-1 mr-5'>/</button>

        </div>
      </div>


      <div className='row ml-1 g-0'>

        <div className='col-9'>
          <div className='row row-cols-4 g-0 justify-content-center'>
            {arr.map((val, i) => (
              <button key={i} value={val} onClick={getValue} className='btn col-3 m-2'>{val}</button>

            ))}
            <button value='0' onClick={getValue} className='zero btn col m-2'>0</button>

            <button value='.' onClick={getValue} className='btn col-3 m-2'>.</button>
          </div>


        </div>

        <div className='operators-container col-3'>

          <button value='*' onClick={getValue} className='operators m-2'>x</button>
          <button value='-' onClick={getValue} className='operators m-2'>-</button>
          <button value='+' onClick={getValue} className='operators m-2'>+</button>
          <button value='=' onClick={getValue} className='equal d-flex justify-content-center align-items-center'>=</button>


        </div>
      </div>

    </div>
  );
}

export default Calculator;

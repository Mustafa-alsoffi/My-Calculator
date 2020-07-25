import React, { useState } from "react";
import "./App.scss";
const arr = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
const ids = [
  "seven",
  "eight",
  "nine",
  "four",
  "five",
  "six",
  "one",
  "two",
  "three",
];

const valuesArr = [];

function Calculator() {
  const [num, setNum] = useState("0");

  return (
    <div className="Calculator col-xs-11 col-sm-6 col-md-5 my-auto mx-auto">
      <div className="container-fluid">
        <div className="row">
          <div id="display" className="display col-12 mx-auto">
            {num}
          </div>
        </div>
      </div>

      <Keys set={setNum} />
    </div>
  );
}

function Keys(props) {
  const getValue = (event) => {
    // Received the value here
    const value = event.target.value;
    const index = valuesArr.length - 1;
    switch (value) {
      case "ac":
        props.set("0");
        valuesArr.splice(0, arr.length);
        break;
      case ".":
        if (valuesArr[index - 1] == "." || valuesArr[index] == ".") break;
      case "-":
        valuesArr.push(value);
        props.set(valuesArr.join(""));
        break;
      case "*":
      case "+":
      case "/":
        switch (valuesArr[index]) {
          case ".":
          case "*":
          case "+":
          case "/":
          case "-":
            if (valuesArr[index]) {
              valuesArr.splice(index, 1);
              const index2 = valuesArr.length - 1;
              //After the removal of the last element, index variable is not updated with that and is undefined!

              switch (valuesArr[index2]) {
                case ".":
                case "*":
                case "+":
                case "/":
                case "-":
                  if (valuesArr[index2]) {
                    valuesArr.splice(index2, 1);
                    break;
                  }
                default:
                  break;
              }

              valuesArr.push(value);

              props.set(valuesArr.join(""));
            }
            break;

          default:
            valuesArr.push(value);
            props.set(valuesArr.join(""));
            break;
        }
        break;
      case "0":
        if (
          valuesArr[0] != "0" &&
          valuesArr[index] != "+" &&
          valuesArr[index] != "-" &&
          valuesArr[index] != "/"
        ) {
          valuesArr.push("0");
          props.set(valuesArr.join(""));
        }
        break;
      case "=":
        try {
          props.set(eval(valuesArr.join("")));
          const result = eval(valuesArr.join(""));
          valuesArr.splice(0, valuesArr.length);
          valuesArr.push(result);
        } catch {
          props.set("Error");
          valuesArr.splice(0, arr.length);
        }
        break;
      default:
        valuesArr.push(value);
        props.set(valuesArr.join(""));

        break;
    }
  };

  return (
    <div className="keys-container container-fluid">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <button
            value="ac"
            onClick={getValue}
            id="clear"
            className="clear col-5 my-1 mr-2 p-2"
          >
            AC
          </button>
          <button
            value="/"
            onClick={getValue}
            id="divide"
            className="operator-division col-3 m-2 my-2 p-1 mr-5"
          >
            /
          </button>
        </div>
      </div>

      <div className="row ml-1 g-0">
        <div className="col-9">
          <div className="row row-cols-4 g-0 justify-content-center">
            {arr.map((val, i) => (
              <button
                key={i}
                value={val}
                onClick={getValue}
                id={ids[i]}
                className="btn col-3 m-2"
              >
                {val}
              </button>
            ))}
            <button
              value="0"
              onClick={getValue}
              id="zero"
              className="zero btn col m-2"
            >
              0
            </button>

            <button
              value="."
              onClick={getValue}
              id="decimal"
              className="btn col-3 m-2"
            >
              .
            </button>
          </div>
        </div>

        <div className="operators-container col-3">
          <button
            value="*"
            onClick={getValue}
            id="multiply"
            className="operators m-2"
          >
            x
          </button>
          <button
            value="-"
            onClick={getValue}
            id="subtract"
            className="operators m-2"
          >
            -
          </button>
          <button
            value="+"
            onClick={getValue}
            id="add"
            className="operators m-2"
          >
            +
          </button>
          <button
            value="="
            onClick={getValue}
            id="equals"
            className="equal d-flex justify-content-center align-items-center"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

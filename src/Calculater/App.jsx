import React, { useState, useEffect } from "react";
import "./style.css";

import Card from "./Card";
const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [ans, setAns] = useState("");
  const [history, setHistory] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const validateNumber1 = (n1, n2) => {
    if (
      n1 === null ||
      n1 === "" ||
      n2 === "" ||
      n2 === null ||
      isNaN(n2) ||
      isNaN(n1)
    ) {
      alert("Enter Number both number");
      return false;
    } else {
      return true;
    }
  };
  const validateNumber2 = (n2, n1) => {
    if (
      n1 === null ||
      n1 === "" ||
      n2 === "" ||
      n2 === null ||
      isNaN(n2) ||
      isNaN(n1)
    ) {
      alert("Enter Number both number");
      return false;
    } else {
      return true;
    }
  };
  const Calculate = (op) => {
    switch (op) {
      case "+":
        if (validateNumber1(num1, num2)) {
          if (validateNumber2(num1, num2)) {
            setAns(num1 + num2);
            setHistory((data) => {
              return [...data, `${num1} ${op} ${num2} = ${num1 + num2}`];
            });
          }
        }
        break;
      case "-":
        setAns(num1 - num2);
        setHistory((data) => {
          return [...data, `${num1} ${op} ${num2} = ${num1 - num2}`];
        });
        break;
      case "*":
        setAns(num1 * num2);
        setHistory((data) => {
          return [...data, `${num1} ${op} ${num2} = ${num1 * num2}`];
        });
        break;
      case "/":
        setAns(num1 / num2);
        setHistory((data) => {
          return [...data, `${num1} ${op} ${num2} = ${num1 / num2}`];
        });
        break;
      default:
        return 0;
    }
  };
  useEffect(() => {
    setIsShow(false);
    document.title = "Calculater using ReactJs";
  }, []);
  return (
    <>
      <Card
        isShow={isShow}
        history={history}
        setHistory={setHistory}
        setIsShow={setIsShow}
        ans={ans}
        Calculate={Calculate}
        setAns={setAns}
        setNum1={setNum1}
        setNum2={setNum2}
        num1={num1}
        num2={num2}
      />
    </>
  );
};

export default App;

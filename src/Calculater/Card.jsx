import React from "react";
import Button from "@mui/material/Button";
const Card = ({history,isShow,setIsShow,ans,Calculate,setAns,setNum1,setNum2,setHistory,num1,num2}) => {
  return <>
      <section className="main-section">
        <div className="main-body">
          <div className="main-box">
            <h3 className="title">my calculater</h3>
            <div className="inputs">
              <input
                type="number"
                name="num1"
                id="num1"
                placeholder="Enter Number 1"
                onChange={(e) => {
                  e.preventDefault();
                  setNum1(parseFloat(e.target.value));
                }}
                value={num1}
              />
              <input
                type="number"
                name="num2"
                id="num2"
                placeholder="Enter Number 2"
                onChange={(e) => {
                  e.preventDefault();
                  setNum2(parseFloat(e.target.value));
                }}
                value={num2}
              />
            </div>
            <div className="oprations">
              <div className="box3">
                <Button
                  variant="outlined"
                  className="op-btn"
                  onClick={() => {
                    setNum1("");
                    setNum2("");
                    setAns("");
                    setHistory([]);
                  }}
                >
                  <i className="fas fa-power-off"></i>
                </Button>
                <Button
                  variant="outlined"
                  className="op-btn"
                  onClick={() => {
                    setNum1("");
                    setNum2("");
                    setAns("");
                  }}
                >
                  <i className="fas fa-backspace"></i>
                </Button>
              </div>
              <div className="box1">
                <Button
                  variant="outlined"
                  className="op-btn"
                  onClick={() => {
                    Calculate("+");
                  }}
                >
                  <i className="fas fa-plus"></i>
                </Button>
                <Button
                  variant="outlined"
                  className="op-btn"
                  onClick={() => {
                    Calculate("-");
                  }}
                >
                  <i className="fas fa-minus"></i>
                </Button>
              </div>
              <div className="box2">
                <Button
                  variant="outlined"
                  className="op-btn"
                  onClick={() => {
                    Calculate("*");
                  }}
                >
                  <i className="fas fa-star-of-life"></i>
                </Button>
                <Button
                  variant="outlined"
                  className="op-btn"
                  onClick={() => {
                    Calculate("/");
                  }}
                >
                  <i className="fas fa-divide"></i>
                </Button>
              </div>
            </div>
            <div className="outputs">
              <input
                type="number"
                name="ans"
                id="ans"
                placeholder="Answer"
                value={ans}
                readOnly
              />
            </div>
            <div className="history-box">
              <p
                className="title"
                onClick={() => {
                  if (isShow) {
                    setIsShow(false);
                  } else {
                    setIsShow(true);
                  }
                }}
              >
                show history
                <span>
                  {isShow && (
                    <>
                      <i className="fas fa-chevron-up"></i>
                    </>
                  )}
                  {isShow || (
                    <>
                      <i className="fas fa-chevron-down"></i>
                    </>
                  )}
                </span>
              </p>
              {isShow && (
                <>
                  <ul>
                    {history.map((cele, idx) => {
                      return <li key={idx}>{cele}</li>;
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
  </>;
};

export default Card;

import React from "react";
import LineChart from "./graph";

const GridContainer = ({ correctAnswers, rank, percentage, valuesubmit }) => {
  const chartData = {
    labels: percentage,
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="html-5.png"
              alt="html"
              style={{ width: "35px", height: "50px" }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                margin: "4px 16px",
              }}
            >
              <h4 style={{ margin: "0px" }}>Hypertext markup language</h4>
              <span>
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </span>
            </div>
          </div>
          <button onClick={() => valuesubmit()}>Update</button>
        </div>
      </div>

      <div className="grid-item">
        <h4>Quick Stats</h4>
        <div className="quick-container">
          <div className="item">
            <img src="1.png" alt="html" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                margin: "4px 16px",
              }}
            >
              <h3 style={{ margin: "0px" }}>{rank}</h3>
              <span>YOUR RANK</span>
            </div>
          </div>
          <div className="item">
            <img src="2.png" alt="html" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                margin: "4px 16px",
              }}
            >
              <h3 style={{ margin: "0px" }}>{percentage}%</h3>
              <span>PERCENTILE</span>
            </div>
          </div>
          <div className="item">
            <img src="3.png" alt="html" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                margin: "4px 16px",
              }}
            >
              <h3 style={{ margin: "0px" }}>{correctAnswers}/15</h3>
              <span>CORRECT ANSWERS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-item">
        <div
          style={{
            width: "full",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h4>Comparison Graph</h4>
            <p style={{ maxWidth: "500px", wordBreak: "break-word", paddingRight:"48px" }}>
              <strong>You scored {percentage}% percentile </strong>
              which is {percentage>72?'greater':'lower '} than the average percentile 72% of all the
              engineers who took this assessment
            </p>
          </div>
          <h2>📈</h2>
        </div>

        <div style={{ maxHeight: "300px" }}>
          <LineChart userData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default GridContainer;

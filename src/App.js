import React from "react";
import "./styles.css";

function Aware() {
  const direction = ["top", "right", "bottom", "left"];

  return (
    <div className="container">
      {[1, 2].map((el) => (
        <div className="card" key={el}>
          {direction.map((el) => (
            <div key={el} className="inner-card">
              {el}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h2>CSS only direction aware hover effect!</h2>
      <p>
        I think it works.{" "}
        <span role="img" aria-label="">
          😬
        </span>
      </p>
      <Aware />
      <Aware />
    </div>
  );
}

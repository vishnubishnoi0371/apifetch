import React, { useState } from "react";

const State = () => {
  const [Adding, setAdding] = useState(0);
  const [data, setdata] = useState(true);
  const [color, setColor] = useState("#ffffff");
  

  const resetCounter = () => {
    setAdding(0);
  };

  function nav() {
    setdata(!data);
  }
  return (
    <div>
      <div>
        <h1 className="text-center">{Adding}</h1>
        <div className="d-flex j_center items-center gap-2">
          <button className="main_btn" onClick={() => setAdding(Adding + 1)}>
            Add
          </button>
          <button onClick={() => setAdding(Adding - 1)} className="main_btn">
            Sub
          </button>
          <button onClick={resetCounter} className="main_btn">
            Reset
          </button>
        </div>
        <div className="d-flex pt-100 items-center j_center flex-col">
          <h1>Toggled</h1>
          <div>
            {!data ? (
              <div>
                <h2>Hide</h2>
              </div>
            ) : (
              <div>
                <h2>Show</h2>
              </div>
            )}
            <button className="main_btn" onClick={nav}>
              click
            </button>
          </div>
        </div>
        <div className="d-flex flex-col pt-100 items-center gap-2">
        <h1>Color Picker</h1>
        <div className="d-flex items-center gap-2">
          <input
            onChange={(e) => setColor(e.target.value)}
            value={color}
            type="color"
          />
          <h3
            className="picker"
            style={{ background: color, color: "black", padding: "10px" }}
          >
            {color}
          </h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default State;

import { useState, useEffect, useRef } from "react";

const HooksUse = () => {
  const [color, setColor] = useState("#ffffff");
  const [counttime, setCounttime] = useState("500");

  useEffect(() => {
    setTimeout(() => {
      setCounttime((counttime) => counttime + 1);
    }, 1000);
  });
  const ref = useRef("");
  const value = ref.current.value;
  const [Render, setRender] = useState();
  const count1 = useRef(0);

  useEffect(() => {
    count1.current = count1.current + 1;
  }, [Render]);

  const [data, setdata] = useState(true);

  function nav() {
    setdata(!data);
  }

  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-col j_center items-center">
      <h1>Render Counter ={count1.current}</h1>
      <input
        className="render_input"
        type="text"
        value={Render}
        onChange={(e) => setRender(e.target.value)}
      />
      {/* usestate */}
      <h2> {count} </h2>
      <div className="d-flex gap-2">
        <button className="main_btn" onClick={() => setCount(count + 1)}>
          Add
        </button>
        <button className="main_btn" onClick={() => setCount(count - 1)}>
          Sub
        </button>
      </div>
      <div className="d-flex items-center j_center flex-col">
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
      <div className="d-flex items-center gap-2">
        <input
          onChange={(e) => setColor(e.target.value)}
          value={color}
          type="color"
        />
        <p style={{ background: color, color: "black", padding: "10px" }}>
          Color Picker = {color}
        </p>
      </div>
      <input
        className="render_input"
        ref={ref}
        placeholder="name"
        type="text"
        name=""
        id=""
      />
      <button onClick={() => ref.current.focus()} className="hook-btn">
        foccus
      </button>
      <p style={{ color: "white" }}>{ref.current.value} </p>
    </div>
  );
};

export default HooksUse;

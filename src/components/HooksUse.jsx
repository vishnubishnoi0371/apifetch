import { useState, useEffect, useRef } from "react";

const HooksUse = () => {
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

  return (
    <div className="d-flex flex-col pt-100 j_center items-center">
      <h1>UseRef</h1>
      <h1>Render Counter ={count1.current}</h1>
      <input
        className="render_input"
        type="text"
        value={Render}
        onChange={(e) => setRender(e.target.value)}
      />
      {/* usestate */}

      <div className="">
        <h1 className="text-center">Focus</h1>
        <input
          className="render_input gap-2"
          ref={ref}
          placeholder="Name"
          type="text"
          name=""
          id=""
        />
        <button onClick={() => ref.current.focus()} className="hook-btn">
          foccus
        </button>
        <p style={{ color: "white" }}>{ref.current.value} </p>
      </div>
    </div>
  );
};

export default HooksUse;

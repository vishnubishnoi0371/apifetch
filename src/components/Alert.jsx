import React, { useState } from "react";

const Alert = () => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      alert(`Submited successfully`);
      // alert(`Added ${newCount} to cart successfully`);
      return newCount;
    });
  };

  return (
    <div>
      <h1 className="text-center">UseState</h1>
      {/* <p>{count}</p> */}
      <div className="d-flex items-center j_center">
        <button className="hook-btn " onClick={handleAddToCart}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default Alert;

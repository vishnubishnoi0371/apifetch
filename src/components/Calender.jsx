import React, { useState } from "react";

const Calender = () => {
  const [selectDate, setSelectDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectDate(event.target.value);
  };

  return (
    <div className="d-flex flex-col j_center items-center">
      <h2>Calendar</h2>
      <input type="date" value={selectDate} onChange={handleDateChange} />
      {selectDate && <p>date :-{selectDate}</p>}
    </div>
  );
};

export default Calender;

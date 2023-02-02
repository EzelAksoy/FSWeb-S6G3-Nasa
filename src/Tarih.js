import React from "react";

function Tarih(props) {
  const { date, setDate } = props;
  return (
    <div>
      <label htmlFor="date">Select Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default Tarih;

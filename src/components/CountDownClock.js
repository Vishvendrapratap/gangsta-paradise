import React from "react";
import Countdown from "react-countdown";

const CountdownClock = ({ targetDate }) => {
  return (
    <div style={{ fontSize: "48px", textAlign: "center", margin: "20px" }}>
      <Countdown date={targetDate} />
    </div>
  );
};

export default CountdownClock;

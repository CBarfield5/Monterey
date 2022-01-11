import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  //return <div className='topNavClock'>{clockState}</div>;
  return <div className='topNavClock'>Sun Jan 9 8:32 PM</div>;
}

export default Clock;
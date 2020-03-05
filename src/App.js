import React, { useState, useEffect } from 'react';

const App = () => {
  const [pixels, setPixels] = useState([]);

  const days = [];
  const createDays = () => {
    for (let i = 1; i < 32; i++) {
      days.push(i);
    }
    console.log(days);
  };
  createDays();

  const createDayDivs = () => {
    return days.map(day => <div className="day" id={`d${day}`}></div>);
  };

  return (
    <div>
      <h1>My Year in Pixels</h1>
      <div className="year" id="y2020">
        <div className="month" id="january">
          {createDayDivs()}
        </div>
      </div>
    </div>
  );
};

export default App;

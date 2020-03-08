import React from 'react';

function Square({ day, setSelectedDay, selected, mood }) {
  const className = `${day.mood} day`;

  return (
    <div
      key={day.id}
      className={className}
      onClick={() => {
        console.log('clicked on square and day is', day);
        setSelectedDay(day);
      }}
    ></div>
  );
}

export default Square;

import React from 'react';
import classNames from 'classnames';

function Square({ day, setSelectedDay, selectedDay, selected }) {
  var squareClass = classNames('day', day.mood, {
    selected: selected,
  });

  return (
    <div
      key={day.id}
      className={squareClass}
      onClick={() => {
        console.log('clicked on square and day is', day);
        const dayClone = { ...day };
        console.log('clickedDay is', dayClone);
        setSelectedDay(dayClone);
        console.log('selected day is', selectedDay);
        console.log('squareclass is', squareClass);
      }}
    ></div>
  );
}

export default Square;

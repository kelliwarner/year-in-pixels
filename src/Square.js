import React from 'react';
import classNames from 'classnames';

function Square({ day, setSelectedDay, selected }) {
  var squareClass = classNames('day', day.mood, {
    selected: selected,
  });

  return (
    <div
      key={day.id}
      className={squareClass}
      onClick={() => {
        setSelectedDay(day);
      }}
    ></div>
  );
}

export default Square;

import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Form from './Form';
import Square from './Square';

//CURRENT GOAL:

// see if state is updating correctly bc seems like it isnt rerendering when
//state is reset because it doesnt change color unless you click somewhere else

//WANT TO ADD LATER:
// want form element to be hidden (display:none?)
// onclick - will update form display so that it shows and text says "select your mood for (the date here)"

const App = () => {
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDay, setSelectedDay] = useState({});

  // { january: [dates], febuary: [dates] ...}
  const [datesInJanuary, setJanuary] = useState([]);
  const [datesInFebruary, setFebruary] = useState([]);
  const [datesInMarch, setMarch] = useState([]);
  const [datesInApril, setApril] = useState([]);
  const [datesInMay, setMay] = useState([]);
  const [datesInJune, setJune] = useState([]);
  const [datesInJuly, setJuly] = useState([]);
  const [datesInAugust, setAugust] = useState([]);
  const [datesInSeptember, setSeptember] = useState([]);
  const [datesInOctober, setOctober] = useState([]);
  const [datesInNovember, setNovember] = useState([]);
  const [datesInDecember, setDecember] = useState([]);

  useEffect(() => {
    populateDayLabel();
    populateJanuary();
    populateFebruary();
    populateMarch();
    populateApril();
    populateMay();
    populateJune();
    populateJuly();
    populateAugust();
    populateSeptember();
    populateOctober();
    populateNovember();
    populateDecember();
  }, []);

  const populateDayLabel = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      monthWorthOfDays.push(i);
    }
    setDaysInMonth(monthWorthOfDays);
  };

  const populateJanuary = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(0)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(0)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setJanuary(monthWorthOfDays);
  };

  const populateFebruary = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 29; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(1)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(1)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setFebruary(monthWorthOfDays);
  };

  const populateMarch = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(2)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(2)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setMarch(monthWorthOfDays);
  };

  const populateApril = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 30; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(3)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(3)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setApril(monthWorthOfDays);
  };

  const populateMay = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(4)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(4)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setMay(monthWorthOfDays);
  };

  const populateJune = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 30; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(5)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(5)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setJune(monthWorthOfDays);
  };

  const populateJuly = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(6)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(6)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setJuly(monthWorthOfDays);
  };

  const populateAugust = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(7)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(7)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setAugust(monthWorthOfDays);
  };

  const populateSeptember = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 30; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(8)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(8)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setSeptember(monthWorthOfDays);
  };

  const populateOctober = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(9)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(9)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setOctober(monthWorthOfDays);
  };

  const populateNovember = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 30; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(10)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(10)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setNovember(monthWorthOfDays);
  };

  const populateDecember = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(11)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(11)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    setDecember(monthWorthOfDays);
  };

  const onSubmit = e => {
    console.log('selected day is', selectedDay);
    e.preventDefault();
    const selectedMood = e.target[0].value;
    if (selectedDay.date.month() === 0) {
      let updatedDay = { ...selectedDay, mood: selectedMood };
      updateMoodState(updatedDay);
    }
  };

  const updateMoodState = updatedDayObj => {
    const indexOfDayInJanuary = datesInJanuary.findIndex(
      date => date.id === updatedDayObj.id
    );
    datesInJanuary[indexOfDayInJanuary] = updatedDayObj;
    console.log(datesInJanuary);
    setJanuary(datesInJanuary);
  };

  const stringifyDate = day => moment(day).format('dddd, MMMM Do YYYY');

  const instructions = () => {
    if (!stringifyDate) {
      return <p>To add a mood, please choose a day.</p>;
    } else {
      return (
        <p>
          You have selected {selectedDay.date._d}. <br />
          Please enter your mood for this day.
        </p>
      );
    }
  };

  return (
    <div id="main-container">
      <div id="display-pixels">
        <h1>My Year in Pixels</h1>
        <div id="create-pixel">
          <p>This will say please select a date.</p>
          <p>
            After you select a date, it will say 'you have selected X date,
            please choose a mood'.
          </p>
          <Form onSubmit={onSubmit} selectedDay={selectedDay} />
        </div>
        <div className="year" id="y2020">
          <div className="month">
            <div className="month-header"></div>
            {daysInMonth.map(day => {
              return (
                <div className="month-header" key={500 + day}>
                  {day}
                </div>
              );
            })}
          </div>
          <div className="month">
            <div className="month-header">J</div>
            {datesInJanuary.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
                mood={day.mood}
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">F</div>
            {datesInFebruary.map(day => (
              <Square day={day} />
            ))}
            <div className="not-a-day"></div>
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">M</div>
            {datesInMarch.map(day => (
              <Square day={day} />
            ))}
          </div>
          <div className="month">
            <div className="month-header">A</div>
            {datesInApril.map(day => (
              <Square day={day} />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">M</div>
            {datesInMay.map(day => (
              <Square day={day} />
            ))}
          </div>
          <div className="month">
            <div className="month-header">J</div>
            {datesInJune.map(day => (
              <Square day={day} />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">J</div>
            {datesInJuly.map(day => (
              <Square day={day} />
            ))}
          </div>
          <div className="month">
            <div className="month-header">A</div>
            {datesInAugust.map(day => (
              <Square day={day} />
            ))}
          </div>
          <div className="month">
            <div className="month-header">S</div>
            {datesInSeptember.map(day => (
              <Square day={day} />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">O</div>
            {datesInOctober.map(day => (
              <Square day={day} />
            ))}
          </div>
          <div className="month">
            <div className="month-header">N</div>
            {datesInNovember.map(day => (
              <Square day={day} />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">D</div>
            {datesInDecember.map(day => (
              <Square day={day} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

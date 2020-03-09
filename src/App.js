import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Form from './Form';
import Square from './Square';
import axios from 'axios';

//CURRENT GOAL:

// fix state for 'selected' - this will allow for my selected state (red border)
// to work as well as the message that says 'you've selected X date'

//WANT TO ADD LATER:
// want form element to be hidden (display:none?) until a square is clicked

const App = () => {
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [selectedDay, setSelectedDay] = useState({});

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
    setJanuary(generateMonth(0, 31));
    setFebruary(generateMonth(1, 29));
    setMarch(generateMonth(2, 31));
    setApril(generateMonth(3, 30));
    setMay(generateMonth(4, 31));
    setJune(generateMonth(5, 30));
    setJuly(generateMonth(6, 31));
    setAugust(generateMonth(7, 31));
    setSeptember(generateMonth(8, 30));
    setOctober(generateMonth(9, 31));
    setNovember(generateMonth(10, 30));
    setDecember(generateMonth(11, 31));
  }, []);

  //what if i add a column to db for month
  // can use moment to get the month and add it
  // to the day object when it is created

  // then when do the 'get' in useeffect on front end,
  // can then if month is jan , set jan?

  useEffect(() => {
    const response = axios.get('/api/daily-moods').then(response => {
      console.log(response.data);
    });
  }, []);

  const populateDayLabel = () => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= 31; i++) {
      monthWorthOfDays.push(i);
    }
    setDaysInMonth(monthWorthOfDays);
  };

  const generateMonth = (month, daysInMonth) => {
    const monthWorthOfDays = [];
    for (let i = 1; i <= daysInMonth; i++) {
      let dayObject = {
        id: moment()
          .year(2020)
          .month(month)
          .date(i)
          .dayOfYear(),
        date: moment()
          .year(2020)
          .month(month)
          .date(i),
        mood: '',
      };
      monthWorthOfDays.push(dayObject);
    }
    return monthWorthOfDays;
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(selectedDay);
    if (selectedDay.mood === '') {
      createMood(e);
    } else {
      changeMood(e, selectedDay);
    }
  };

  const createMood = async e => {
    const selectedMood = e.target[0].value;
    let updatedDay = { ...selectedDay, mood: selectedMood };
    updateMoodState(updatedDay);
    await axios
      .post('/api/daily-moods', updatedDay)
      .then(updateMoodState(updatedDay));
  };

  const changeMood = async (e, selectedDay) => {
    const selectedMood = e.target[0].value;
    let updatedDay = { ...selectedDay, mood: selectedMood };
    updateMoodState(updatedDay);
    await axios
      .put(`/api/daily-moods/${updatedDay.id}`, updatedDay)
      .then(updateMoodState(updatedDay));
  };

  const updateMoodState = updatedDayObj => {
    if (selectedDay.date.month() === 0) {
      const indexOfDayInJanuary = datesInJanuary.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInJanuary[indexOfDayInJanuary] = updatedDayObj;
      setJanuary([...datesInJanuary]);
    }
    if (selectedDay.date.month() === 1) {
      const indexOfDayInFebruary = datesInFebruary.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInFebruary[indexOfDayInFebruary] = updatedDayObj;
      setFebruary([...datesInFebruary]);
    }
    if (selectedDay.date.month() === 2) {
      const indexOfDayInMarch = datesInMarch.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInMarch[indexOfDayInMarch] = updatedDayObj;
      setMarch([...datesInMarch]);
    }
    if (selectedDay.date.month() === 3) {
      const indexOfDayInApril = datesInApril.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInApril[indexOfDayInApril] = updatedDayObj;
      setApril([...datesInApril]);
    }
    if (selectedDay.date.month() === 4) {
      const indexOfDayInMay = datesInMay.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInMay[indexOfDayInMay] = updatedDayObj;
      setMay([...datesInMay]);
    }
    if (selectedDay.date.month() === 5) {
      const indexOfDayInJune = datesInJune.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInJune[indexOfDayInJune] = updatedDayObj;
      setJune([...datesInJune]);
    }
    if (selectedDay.date.month() === 6) {
      const indexOfDayInJuly = datesInJuly.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInJuly[indexOfDayInJuly] = updatedDayObj;
      setJuly([...datesInJuly]);
    }
    if (selectedDay.date.month() === 7) {
      const indexOfDayInAugust = datesInAugust.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInAugust[indexOfDayInAugust] = updatedDayObj;
      setAugust([...datesInAugust]);
    }
    if (selectedDay.date.month() === 8) {
      const indexOfDayInSeptember = datesInSeptember.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInSeptember[indexOfDayInSeptember] = updatedDayObj;
      setSeptember([...datesInSeptember]);
    }
    if (selectedDay.date.month() === 9) {
      const indexOfDayInOctober = datesInOctober.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInOctober[indexOfDayInOctober] = updatedDayObj;
      setOctober([...datesInOctober]);
    }
    if (selectedDay.date.month() === 10) {
      const indexOfDayInNovember = datesInNovember.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInNovember[indexOfDayInNovember] = updatedDayObj;
      setNovember([...datesInNovember]);
    }
    if (selectedDay.date.month() === 11) {
      const indexOfDayInDecember = datesInDecember.findIndex(
        date => date.id === updatedDayObj.id
      );
      datesInDecember[indexOfDayInDecember] = updatedDayObj;
      setDecember([...datesInDecember]);
    }
  };

  // const stringifyDate = day => moment(day).format('dddd, MMMM Do YYYY');

  // const instructions = () => {
  //   if (!stringifyDate) {
  //     return <p>To add a mood, please choose a day.</p>;
  //   } else {
  //     return (
  //       <p>
  //         You have selected {selectedDay.date._d}. <br />
  //         Please enter your mood for this day.
  //       </p>
  //     );
  //   }
  // };

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
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">F</div>
            {datesInFebruary.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
            <div className="not-a-day"></div>
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">M</div>
            {datesInMarch.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">A</div>
            {datesInApril.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">M</div>
            {datesInMay.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">J</div>
            {datesInJune.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">J</div>
            {datesInJuly.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">A</div>
            {datesInAugust.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">S</div>
            {datesInSeptember.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">O</div>
            {datesInOctober.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
          </div>
          <div className="month">
            <div className="month-header">N</div>
            {datesInNovember.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
            <div className="not-a-day"></div>
          </div>
          <div className="month">
            <div className="month-header">D</div>
            {datesInDecember.map(day => (
              <Square
                day={day}
                setSelectedDay={setSelectedDay}
                selectedDay={selectedDay}
                selected={day === selectedDay}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

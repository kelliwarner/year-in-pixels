const pg = require('pg');
const moment = require('moment');
const client = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/year_in_pixels_db'
);

client.connect();

// const setMoment = moment('2020-01-01');
// console.log('setMoment is', setMoment);

// const startDate = moment('2020-01-01')._d.format('YYYY-MM-DD');

// console.log('start date is', startDate);

// const nextDate = setMoment.add(1, 'd')._d;
// console.log('next date is', nextDate);

// const makeSQL = () => {
//   for (let i=0; i<367; i++) {

//   }
// }

const sync = async () => {
  const SQL = `
  DROP TABLE IF EXISTS daily_mood;

  CREATE TABLE daily_mood(
    id SERIAL,
    mood VARCHAR(255),
    date DATE
  );

  INSERT INTO daily_mood (mood)
  VALUES ('')
  ;

`;
  client.query(SQL);
};

const readMoods = async () => {
  const SQL = 'SELECT * from daily_mood';
  return (await client.query(SQL)).rows;
};

module.exports = {
  sync,
  readMoods,
};

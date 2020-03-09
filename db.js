const pg = require('pg');
const client = new pg.Client(
  process.env.DATABASE_URL || 'postgres://localhost/year_in_pixels_db'
);

client.connect();

const sync = async () => {
  const SQL = `
  DROP TABLE IF EXISTS daily_mood;

  CREATE TABLE daily_mood(
    id INTEGER UNIQUE,
    date DATE,
    mood VARCHAR(255)
  );


`;
  await client.query(SQL);
};

const readMoods = async () => {
  const SQL = 'SELECT * from daily_mood';
  return (await client.query(SQL)).rows;
};

const createMood = async mood => {
  console.log('at beginning of create mood, mood is', mood);
  const SQL = `
  INSERT INTO daily_mood (id, date, mood) VALUES ($1, $2, $3) returning *`;
  const response = await client.query(SQL, [mood.id, mood.date, mood.mood]);
  console.log(response.rows[0]);
  return response.rows[0];
};

module.exports = {
  sync,
  readMoods,
  createMood,
};

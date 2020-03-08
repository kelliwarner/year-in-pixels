import React from 'react';
import moment from 'moment';

function Form({ onSubmit }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <select>
          <option>Happy</option>
          <option>Meh</option>
          <option>Sad</option>
          <option>Angry</option>
        </select>
        <button>Add Mood</button>
      </form>
    </div>
  );
}

export default Form;

import React from 'react';

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
        <button>Set Mood</button>
      </form>
    </div>
  );
}

export default Form;

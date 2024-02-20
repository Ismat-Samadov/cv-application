// src/components/Education.js
import React, { useState } from 'react';

function Education({ data = {}, onSubmit }) {
  const [University, setUniversity] = useState(data.University || '');
  const [Specialty, setSpecialty] = useState(data.Specialty || '');
  const [Years, setYears] = useState(data.Years || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ University, Specialty, Years });
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Education Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={University} onChange={(e) => setUniversity(e.target.value)} placeholder="University" />
          <input type="text" value={Specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" />
          <input type="text" value={Years} onChange={(e) => setYears(e.target.value)} placeholder="Years" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>University: {University}</p>
          <p>Specialty: {Specialty}</p>
          <p>Years: {Years}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;

// src/components/Experience.js
import React, { useState } from 'react';

function Experience({ data = {}, onSubmit }) {
  const [Company, setCompany] = useState(data.Company || '');
  const [Job, setJob] = useState(data.Job || '');
  const [Years, setYears] = useState(data.Years || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ Company, Job, Years });
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Experience Information</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={Company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
          <input type="text" value={Job} onChange={(e) => setJob(e.target.value)} placeholder="Job" />
          <input type="text" value={Years} onChange={(e) => setYears(e.target.value)} placeholder="Years" />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {Company}</p>
          <p>Job: {Job}</p>
          <p>Years: {Years}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;

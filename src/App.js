// App.js
import React, { useState } from 'react';
import './styles.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  const handleEducationSubmit = (data) => {
    console.log("Education data submitted:", data);
    setEducation([...education, data]);
  };

  const handleExperienceSubmit = (data) => {
    console.log("Experience data submitted:", data);
    setExperience([...experience, data]);
  };

  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo data={generalInfo} onSubmit={handleGeneralInfoSubmit} />
      <Education onSubmit={handleEducationSubmit} />
      <Experience onSubmit={handleExperienceSubmit} />

      <h2>Submitted Education:</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            University: {edu.University}, Specialty: {edu.Specialty}, Years: {edu.Years}
          </li>
        ))}
      </ul>

      <h2>Submitted Experience:</h2>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            Company: {exp.Company}, Job: {exp.Job}, Years: {exp.Years}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
